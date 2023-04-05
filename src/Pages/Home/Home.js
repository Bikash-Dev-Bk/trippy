import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Clients from './Clients/Clients';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Clients></Clients>
            <Team></Team>
        </div>
    );
};

export default Home;