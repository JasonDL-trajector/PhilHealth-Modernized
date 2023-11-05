import Header from '../common/Header';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollButton from '../common/ScrollToTop/ScrollButton'; 

const appStyle = {
  backgroundImage: 'url(https://www.philhealth.gov.ph/images/bg_green.jpg)'
}

const OurPartners = () => {
  return (
    <div className='App'
    style={appStyle}>

      <div>
        <Header />
      </div>

      <div>
        <Navbar />
      </div>

      <div>About Us</div>

      <div>
        Links
      </div>

      <ScrollButton />

      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default OurPartners;