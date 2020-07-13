import React from 'react';
import Background1 from './Components/Background1';
import Adventure from './Components/Adventure';
import Offers from './Components/Offers';
import Background2 from './Components/Background2'
import Destination from './Components/Destinations';
import SpecialOffers from './Components/SpecialOffers';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Background1 />
      <Adventure />
      <Offers />
      <Background2 />
      <Destination />
      <SpecialOffers />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
