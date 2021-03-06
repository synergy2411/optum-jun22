import { v4 } from 'uuid';
const Mutation = {
    createUser(parent, args, { db }, info) {
        const { name, email, age } = args.data
        const newUser = {
            id: v4(),
            name,
            email,
            age
        }
        db.users.push(newUser)
        return newUser;
    },
    createPost(parent, args, { db, pubsub }, info) {
        const { title, body, published } = args.data;
        const position = db.users.findIndex(user => user.id === args.authorId)
        if (position < 0) {
            throw new Error("Unable to locate User")
        }
        const newPost = {
            id: v4(),
            title,
            body,
            published: published || false,
            author: args.authorId
        }
        pubsub.publish("the-post-channel", {
            post : {
                mutation : "CREATED",
                data: newPost
            }
        })
        db.posts.push(newPost);
        return newPost;
    },
    createComment(parent, args, { db }, info) {
        const { authorId, postId, text } = args;
        const userFound = db.users.find(user => user.id === authorId)
        const postFound = db.posts.find(post => post.id === postId)
        if (userFound && postFound) {
            const newComment = {
                id: v4(),
                text,
                post: postId,
                creator: authorId
            }
            db.comments.push(newComment);
            return newComment;
        }
        throw new Error("Unable to find User / Post")
    },
    deleteComment(_, args, { db }) {
        const position = db.comments.findIndex(comment => comment.id === args.commentId)
        if (position >= 0) {
            const [deletedComment] = db.comments.splice(position, 1)
            return deletedComment
            // const commentToDelete = db.comments[position]
            // db.comments = db.comments.filter(comment => comment.id !== args.commentId)
            // return commentToDelete
        }
        throw new Error("Unable to find comment")
    },
    deletePost(_, args, { db, pubsub }) {
        const position = db.posts.findIndex(post => post.id === args.postId)
        if (position >= 0) {
            const postToDelete = db.posts[position];
            db.posts = db.posts.filter(post => {
                db.comments = db.comments.filter(comment => comment.post !== args.postId)
                return post.id !== args.postId
            })
            pubsub.publish("the-post-channel", {
                post : {
                    mutation: "DELETED",
                    data : postToDelete
                }
            })
            return postToDelete;
        }
        throw new Error("Unable to find post")
    },
    deleteUser(_, args, { db }) {

        const position = db.users.findIndex(user => user.id === args.userId)
        if (position >= 0) {
            db.comments = db.comments.filter(comment => comment.creator !== args.userId)
            db.posts = db.posts.filter(post => {
                const isMatch = post.author === args.userId
                if (isMatch) {
                    db.comments = db.comments.filter(comment => comment.post !== post.id)
                }
                return !isMatch;
            })
            const [deletedUser] = db.users.splice(position, 1)
            return deletedUser;
        }
        throw new Error("Unable to find user")
    },
    updateUser(_, args, {db}){
        const position = db.users.findIndex(user => user.id === args.userId)
        if(position >= 0){
            db.users[position] = {
                ...db.users[position],
                ...args.data
            }
            return db.users[position]
        }
        throw new Error("Unable to find user")
    }
}

export { Mutation };

