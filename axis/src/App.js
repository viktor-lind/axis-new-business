import * as React from 'react';

import { getUsers } from './api/getUsers.js';


function App() {
	const [users, setUsers] = React.useState([]);

	React.useEffect(() =>
	{
		async function fetchUsers()
		{
			const result = await getUsers();
			setUsers(result)
		}

		fetchUsers();
	}, []);
	console.log(users)
	return (
		<React.Fragment />
	);
}

export default App;
