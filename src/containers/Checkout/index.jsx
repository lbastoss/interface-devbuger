import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

import { CheckoutForm } from '../../components';
import stripePromise from '../../config/stripeConfig';

export function Checkout() {
	const location = useLocation();
	if (!location.state || !location.state.clientSecret) {
		return <div> Erro, volte e tente novamente </div>;
	}

	const { clientSecret } = location.state;

	return (
		<Elements stripe={stripePromise} options={{ clientSecret }}>
			<CheckoutForm />
		</Elements>
	);
}
