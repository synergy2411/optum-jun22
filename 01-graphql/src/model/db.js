
let users = [
    { id: "U001", name: "John Doe", email: "john@test", age: 34 },
    { id: "U002", name: "Alice Doe", email: "alice@test", age: 35 },
    { id: "U003", name: "Mario Doe", email: "zzz@test", age: 36 },
]
let posts = [
    { id: "P001", title: "Aweosme GraphQL", body: "...", published: false, author: "U001" },
    { id: "P002", title: "GraphQL 101", body: "...", published: true, author: "U002" },
    { id: "P003", title: "Mastering GraphQL", body: "...", published: false, author: "U001" },
    { id: "P004", title: "GraphQL for Beginners", body: "...", published: true, author: "U003" },
]
let comments = [
    { id: "C001", text: "I Love it", post: "P001", creator: "U003"},
    { id: "C002", text: "Like it", post: "P002", creator: "U003"},
    { id: "C003", text: "it was awesosme", post: "P003", creator: "U002"},
    { id: "C004", text: "Nice post", post: "P002", creator: "U001"},
]

export {
    users, posts, comments
}