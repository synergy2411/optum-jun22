# Break time
12:00 - 12:15 (15 minutes)
01:30 - 02:15 (45 minutes)
04:00 - 04:15 (15 minutes)


# create package.json
> npm init -y

# to install Graphql Yoga
> npm install @graphql-yoga/node graphql
> npm install @babel/core @babel/cli @babel/preset-env @babel/node nodemon -D

> npm run start / npm start

# READ
# POST
query {
  posts{
    id title published 
    author {
      id name email
      posts{
        id title
      }
    }
    comments{
      id
      text
    }
  }
}

# USER
query{
  users{
    id
    name
    email
    posts{
      id
      title
      comments {
        id 
        text
        creator{
          name
        }
      }
    }
  }
}

# COMMENT
query{
  comments{
    id
    text
    post{
      id
      title
    }
    creator{
      id
      name
    }
  }
}


# CREATE
# USER
mutation{
  createUser(data:{
    name:"sumit",
    age: 36,
    email:"sumit@test"
  }){
    id
    name
    email
    age
  }
}

# POST
mutation{
  createPost(authorId:"ad61250a-71c5-4585-b1ed-914de958587c",
    data:{
    title:"New Title 1",
    body:"..."
  }){
    id
    title
    body
    published
    author{
      id name
    }
  }
}
# COMMENT
mutation{
  createComment(
    authorId:"U001" 
    postId:"76c7e6c2-64bd-4ca4-b0b9-1ea43df5622d", 
    text:"Like it"
  ){
    id
    text
  }
}


# DELETE
# COMMENT 
mutation{
  deleteComment(commentId:"C001"){
    id
    text
  }
}

# POST
mutation{
  deletePost(postId:"P002"){
    id title 
  }
}

# USER 



# To create React App
> npx create-react-app frontend

# To install bootstrap
> npm install bootstrap@4