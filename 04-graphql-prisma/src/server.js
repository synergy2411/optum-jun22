const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
    await prisma.$connect()
    const allUsers = await prisma.user.findMany({
        include : {
            posts : true
        }
    })
    console.log(allUsers)
}

main().then(res => {
    console.log("Connected")
}).catch(console.log)