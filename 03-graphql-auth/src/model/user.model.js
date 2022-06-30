import { Schema, model } from 'mongoose';

const userSchema = {
    email : {
        type : Schema.Types.String,
        require : true
    },
    password : {
        type : Schema.Types.String,
        require : true
    }
}

const UserModel = model("Admin", userSchema);

export { UserModel }