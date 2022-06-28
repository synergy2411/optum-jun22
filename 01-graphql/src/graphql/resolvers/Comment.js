const Comment = {
    post(parent, args, {users, posts, comments}, info){
        return posts.find(post => post.id === parent.post)
    },
    creator(parent, args, {users, posts, comments}, info){
        return users.find(user => user.id === parent.creator)
    }
}

export { 
    Comment
}