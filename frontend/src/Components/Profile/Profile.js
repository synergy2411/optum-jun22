import { gql, useQuery } from '@apollo/client' ;

const FETCH_PROFILE = gql`
    query {
        profile {
            id
            email
        }
    }
`

const Profile = () => {
    const {data, error, loading } = useQuery(FETCH_PROFILE)    
    if(error){
        console.log(error)
        return <p>Something unexpected happened</p>
    }
    if(data){
        return (
            <div>
                <h4>Hello {data.profile.email}!! Your ID : {data.profile.id}</h4>
            </div>
        );
    }
}

export default Profile;
