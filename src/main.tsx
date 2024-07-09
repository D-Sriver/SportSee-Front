import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<App />} />
					{/* Ajoutez d'autres routes ici si nécessaire */}
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
