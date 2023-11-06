import Header from '../common/Header';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollButton from '../common/ScrollToTop/ScrollButton'; 

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Blog from './components/Blog';

const appStyle = {
  backgroundImage: 'url(https://www.philhealth.gov.ph/images/bg_green.jpg)'
}

const OnlineServices = () => {

  useEffect(()=>{
    Aos.init({duration: 1500})
  }, [])

  return (
    <div className='App'
    style={appStyle}>

      <div>
        <Header />
      </div>

      <div>
        <Navbar />
      </div>

      <div style={{ marginTop: '10.5rem'}}>
        <Blog />
      </div>

      <ScrollButton />

      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default OnlineServices;