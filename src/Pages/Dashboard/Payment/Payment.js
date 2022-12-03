import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl my-4'>Payment for {treatment}</h3>
            <h3 className='text-xl'>Please pay <strong className='text-orange-600'>{price}$</strong> for your appointment on {appointmentDate} at {slot}</h3>

            <div className='my-12 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;