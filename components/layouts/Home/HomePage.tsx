import React from 'react';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <WhyUs />
        </div>
    );
};

export default HomePage;