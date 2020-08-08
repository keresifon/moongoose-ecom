function PayStack(reference, customer, totalPrice, props, setCart) {
    const config = {
      reference: reference,
      email: customer,
      amount: totalPrice * 100,
      publicKey: process.env.REACT_APP_API_PAYSTACK,
    };
  
    const onSuccess = (reference) => {
      props.history.push('/thankyou');
      setCart({});
  
      console.log(reference);
    };
  
    const onClose = () => {
      props.history.push('/cart');
  
    };
    const componentProps = {
      ...config,
      text: 'Pay',
      onSuccess,
      onClose,
      className: 'btn btn-outline-primary btn-block',
    };
    return componentProps;
  }
  
  export default PayStack;