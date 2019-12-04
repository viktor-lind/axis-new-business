import axios from 'axios';

//Get list of devices from api
export async function getAllDevices()
{
    const result = await axios.get('http://localhost:3000/devices');

    return result.data;
}