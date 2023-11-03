import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollButton from '../components/ScrollToTop/ScrollButton'; 

const appStyle = {
  backgroundImage: 'url(https://www.philhealth.gov.ph/images/bg_green.jpg)'
}

const Downloads = () => {
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

export default Downloads;