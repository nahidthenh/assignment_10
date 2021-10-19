import React from 'react';
import Banner from '../Banner/Banner';
import Cta from '../Cta/Cta';
import Fact from '../Fact/Fact';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Home.css'
const Home = () => {
    
    return (
        <div>

          

            <Banner></Banner>
            <Service></Service>
            <Fact></Fact>
            <Cta></Cta>
            <Footer></Footer>


        </div>
    );
};

export default Home;