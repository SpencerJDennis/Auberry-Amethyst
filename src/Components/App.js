import SiteControl from './SiteControl';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SiteControl />
      <Footer />
    </div>
  );
}

export default App;