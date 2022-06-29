
const Subscription = {
    counter : {
        subscribe : async function* (parent, args, ctx, info){
            // asyncIterator()      // for older version
            for(let i = args.from; i >= 0; i--){
                await new Promise((resolve) => setTimeout(resolve, 1000))
                yield { counter : i }
            }
        }
    },
    post: {
        subscribe : (parent, args, {db, pubsub}, info) => {
           return pubsub.subscribe("the-post-channel")
        },
        resolve : (payload) => {
            console.log(payload)
            return payload;
        }
    }
}

export { Subscription }
