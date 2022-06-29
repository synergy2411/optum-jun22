import { TodoModel } from "../../model/todo.model";

const Mutation = {
    createTodo : async (_, args, context) => {
        try{
            const todo = new TodoModel({title : args.title})
            const savedTodo = await todo.save()
            return {
                id: savedTodo._doc._id,
                title : savedTodo._doc.title,
                status : savedTodo._doc.status
            };
        }catch(err){
            console.log(err)
        }
    }
}

export { Mutation };

