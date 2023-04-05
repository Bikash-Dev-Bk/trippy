import React from 'react';
import Bannner from './Banner/Bannner';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Clients from './Clients/Clients';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>
            <Services></Services>
            <Gallery></Gallery>
            <Clients></Clients>
            <Team></Team>
        </div>
    );
};

export default Home;