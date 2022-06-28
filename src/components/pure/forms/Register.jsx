import { useState } from 'react';

const initialData = [
	{
		user: '',
		name: '',
		email: '',
		password: '',
	},
];

export const Register = () => {
	const [data, setData] = useState(initialData);

	return <div>Register</div>;
};
