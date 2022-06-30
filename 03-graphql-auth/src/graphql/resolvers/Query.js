import { verify } from 'jsonwebtoken';
import { UserModel } from '../../model/user.model';

const SECRET_KEY = "My_Super_Secret_key";

const Query = {
    hello() {
        return "Hello World"
    },
    profile: (_, args, { token }) => {
        if (!token) {
            console.log("Auth Required");
            throw new Error("Auth Required")
        }

        verify(token, SECRET_KEY, async (err, decode) => {
            if (err) {
                console.log(err);
                throw new Error(err)
            }
            console.log("DECODE : ", decode)            // {iat :"", id : ""}
            // try{
            //     const userFound = await UserModel.findOne({id : decode.id})
            //     console.log(userFound);
            //     if(userFound){
            //         return {
            //             id : userFound._id,
            //             email  : userFound.email
            //         }
            //     }
            //     console.log("User not found");
            // }catch(err){
            //     console.log(err);
            //     throw new Error(err)
            // }
        })
        console.log("Outide verify")
        return { id : "Dummy ID", email : "test@test" }
    }
}

export { Query }