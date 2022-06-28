import { useState } from 'react';

const initialCredentials = [
	{
		user: '',
		password: '',
	},
];

export const Login = () => {
	const [credentials, setCredentials] = useState(initialCredentials);

	return <div>Login</div>;
};

/* TODO:
	Componente que va a contener un formulario para 
	autenticación de usuarios.
*/
