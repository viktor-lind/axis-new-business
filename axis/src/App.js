import * as React from 'react';

import { getUsers } from './api/getUsers.js';

import { LoginForm } from './containers/loginForm';


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

	return (
		<LoginForm users={users} />
	);
}

export default App;
