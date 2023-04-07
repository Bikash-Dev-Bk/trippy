import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Clients from './Clients/Clients';
import Team from './Team/Team';
import Newsletter from './Newsletter/Newsletter';
import PopularPlace from './PopularPlace/PopularPlace';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularPlace></PopularPlace>
            <Services></Services>
            <Gallery></Gallery>
            <Clients></Clients>
            <Team></Team>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;