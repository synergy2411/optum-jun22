import { verify } from 'jsonwebtoken';

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

        verify(token, SECRET_KEY, (err, decode) => {
            if (err) {
                console.log(err);
                throw new Error(err)
            }
            console.log("DECODE : ", decode)            // {iat :"", id : ""}
            return ({ id: "Dummy ID",
                name: "Any name",
                age: 32,
                salary: 100000,
                email: "test@test"
            })
        })
    }
}

export { Query }