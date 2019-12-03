import axios from 'axios';

//Get list of users from api
export async function getUsers()
{
    const result = await axios('http://localhost:3000/users');

    return result.data;
}