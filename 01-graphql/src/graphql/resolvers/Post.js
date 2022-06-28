const Post = {
    author(parent, args, {users, posts, comments}, info){
        return users.find(user => user.id === parent.author);
    },
    comments(parent, args, {users, posts, comments}, info){
        return comments.filter(comment => comment.post === parent.id)
    }
}

export {
    Post
}