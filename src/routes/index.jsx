import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Menu } from '../containers/Menu';
import { Register } from '../containers/Register';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cart } from '../containers/Cart';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Home />
				<Footer />
			</>
		),
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/cadastro',
		element: <Register />,
	},

	{
		path: '/cardapio',
		element: (
			<>
				<Header />
				<Menu />
			</>
		),
	},

	{
		path: '/carrinho',
		element: <Cart />,
	},
]);
