import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import Layout from './components/Layout';
import SelectUser from './components/SelectUser';
import './index.css';
import NotFound from './pages/NotFound.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<SelectUser />} />
				<Route element={<Layout />}>
					<Route path="/dashboard" element={<App />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
