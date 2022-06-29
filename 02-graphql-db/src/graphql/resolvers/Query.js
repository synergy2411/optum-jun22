import { TodoModel } from '../../model/todo.model';

const Query = {
    hello() {
        return "World"
    },
    todos : async () => {
        try{
            const alltodos = await TodoModel.find();
            const mappedTodos = alltodos.map(todo => {
                return {
                    ...todo._doc,
                    id: todo._doc._id,
                }
            })
            return mappedTodos;
        }catch(err){
            console.log(err)
        }
    }
}

export { Query }