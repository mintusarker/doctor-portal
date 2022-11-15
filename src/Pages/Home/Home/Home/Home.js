import React from 'react';
import Banner from '../../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;