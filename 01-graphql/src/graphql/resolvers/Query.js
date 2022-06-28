const Query = {
    hello() {
        return "World!!"
    },
    age() {
        return user.age;
    },
    me(parent, args, {db}, info) {
        const userFound = db.users.find(user => {
            const nameFound = user.name.toLowerCase().includes(args.searchTerm.toLowerCase())
            const emailFound = user.email.toLowerCase().includes(args.searchTerm.toLowerCase())
            return nameFound || emailFound;
        })
        if (!userFound) {
            throw new Error("Unable to find the user")
        }
        return userFound
    },
    users(parent, args, {db}, info) {
        return db.users;
        // return users.map(user => {
        //     const userPosts = posts.filter(post => post.author === user.id)
        //     const userComments = comments.filter(comment => comment.creator === user.id)
        //     return { ...user, posts: userPosts, comments : userComments }
        // });
    },
    posts(parent, args, {db}, info) {
        return db.posts;
        // return posts.map(post => {
        //     const postUser = users.find(user => user.id === post.author)
        //     const postComments = comments.filter(comment => comment.post === post.id)
        //     return { ...post, author: postUser, comments : postComments }
        // })
    },
    comments(parent, args, {db}, info){
        return db.comments;
        // return comments.map(comment =>{
        //     const commentPost = posts.find(post => post.id === comment.post)
        //     const commentCreator = users.find(user => user.id === comment.creator)
        //     return {...comment, post : commentPost, creator : commentCreator}
        // })
    }
}

export { Query }