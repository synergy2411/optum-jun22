import { model, Schema } from 'mongoose';

const todoSchema = new Schema({
    title: {
        type: Schema.Types.String,
        require: true
    },
    status: {
        type: Schema.Types.Boolean,
        default: false
    }
})

const TodoModel = model("Todo", todoSchema)

export { TodoModel }