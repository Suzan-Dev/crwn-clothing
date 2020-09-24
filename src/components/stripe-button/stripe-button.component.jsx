import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100; // cents
  const publishableKey =
    'pk_test_51HUTXJHXCOtqMoqVZzldNSLB41eaILHBfP0RA00oewC4U3v0TeFlu5gsbacxYJ0tIbHVHSIzDBvZR4M692teqVUq00pSOJWc0E';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crwn Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
