import React from 'react';
import Popular from "./Popular/Popular";
import Arrival from './Arrival/Arrival';
import About from './About/About';

const Home = () => {
    return (
        <main>
            <Arrival/>
            <Popular/>
            <About/>
        </main>
    );
};
export default Home;