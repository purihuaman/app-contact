import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/styles.scss';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
