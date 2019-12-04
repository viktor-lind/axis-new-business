import axios from 'axios';

//Get list of users from api
export async function getSites()
{
    const result = await axios.get('http://localhost:3000/sites');

    return result.data;
}