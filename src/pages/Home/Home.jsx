import React from 'react';
import Begin from "./Begin/Begin";
import Popular from "./Popular/Popular";
import Arrival from './Arrival/Arrival';
import About from './About/About';

const Home = () => {
    return (
        <main>
            <Begin/>
            <Arrival/>
            <Popular/>
            <About/>
        </main>
    );
};
export default Home;