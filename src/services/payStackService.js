function PayStack(treference, customer, totalPrice, props, setCart, updateOrder) {
    const config = {
      reference: treference,
      email: customer,
      amount: totalPrice * 100,
      publicKey: process.env.REACT_APP_API_PAYSTACK,
    };
  
    const onSuccess =  (reference) => {
      const order = {transaction_ref: treference, paymentStatus: true, status: "Completed"}
      updateOrder(order)
      props.history.push('/thankyou');
     // console.log("Paystack",order)
      
      setCart({});
  
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