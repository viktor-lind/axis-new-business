//Function that compares if user and password matches a user in user list
export function loginUser({ users, username, password })
{
    const userExists = users.find((user) =>
    {
        return user.password === password && user.username === username
    });
 
    return userExists ? true : false; 
}