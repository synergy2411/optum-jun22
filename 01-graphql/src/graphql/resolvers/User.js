const User = {
    posts(parent, args, {users, posts, comments}, info){
        return posts.filter(post => post.author === parent.id)
    },
    comments(parent, args, {users, posts, comments}, info){
        return comments.filter(comment => comment.creator === parent.id)
    }
}

export { User }