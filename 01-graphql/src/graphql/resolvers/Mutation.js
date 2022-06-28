import { v4 } from 'uuid';
const Mutation = {
    createUser(parent, args, {users, posts, comments}, info){
        const {name, email, age} = args.data
        const newUser = {
            id: v4(),
            name,
            email,
            age
        }
        users.push(newUser)
        return newUser;
    },
    createPost(parent, args, {users, posts, comments}, info){
        const {title, body, published} = args.data;
        const position = users.findIndex(user => user.id === args.authorId)
        if(position < 0){
            throw new Error("Unable to locate User")
        }
        const newPost = {
            id : v4(),
            title,
            body,
            published : published || false,
            author: args.authorId
        }
        posts.push(newPost);
        return newPost;
    },
    createComment(parent, args, {users, posts, comments}, info){
        const { authorId, postId, text } = args;
        const userFound = users.find(user => user.id === authorId)
        const postFound = posts.find(post => post.id === postId)
        console.log(userFound, postFound);
        if(userFound && postFound){
            const newComment = { 
                id : v4(),
                text,
                post : postId,
                creator : authorId
            }
            comments.push(newComment);
            return newComment;
        }
        throw new Error("Unable to find User / Post")
    },
    deleteComment(_, args, { comments }){
        const position = comments.findIndex(comment => comment.id === args.commentId)
        if(position >= 0){
            const commentToDelete = comments[position]
            comments = comments.filter(comment => comment.id !== args.commentId)
            return commentToDelete
        }
        throw new Error("Unable to find comment")
    }
}

export { Mutation }