import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51GsC1bArxcG700aPgJR1rCzglLOGNhuScUIUjeSAO4aTaueALC26aQvQI0sVJFAWpLU76fdyvy0LhFG68GueL7k700JYypRMXN";

	const onToken = (token) => {
		console.log(token);
		alert("Your payment is successful!");
	};
	return (
		<StripeCheckout
			label='Make payment'
			name='CRWN Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
			currency='SGD'
			locale='auto'
		/>
	);
};

export default StripeCheckoutButton;
