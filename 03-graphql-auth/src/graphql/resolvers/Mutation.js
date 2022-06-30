import { UserModel } from '../../model/user.model';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const SECRET_KEY = "My_Super_Secret_key";

const Mutation = {
    createUser : async (_, args, context) => {
        const {email, password} = args.data;
        try{
            const emailFound = await UserModel.find({email});
            if(emailFound.length === 0){
                const hashedPassword = await hash(password, 10)
                const newUser = new UserModel({email, password : hashedPassword});
                const savedUser = await newUser.save();
                return {
                    id : savedUser._doc._id,
                    email : savedUser._doc.email
                }
            }
            console.log("User Already Exist - ", email)
            throw new Error("User already exist")
        }catch(err){
            console.log(err);
            throw new Error(err)
        }
    },
    login : async (_, args, context) => {
        try{
            const {email, password} = args.data;
            const userFound = await UserModel.findOne({email})
            if(userFound){
                const passwordMatch = await compare(password, userFound.password)
                if(passwordMatch){
                    const token = sign({id : userFound._id}, SECRET_KEY)
                    return {
                        token 
                    }
                }
                console.log("Bad Credentials")
                throw new Error("Bad Credentials")
            }
            console.log("USer not found");
            throw new Error("User not found.")
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }
}

export { Mutation }