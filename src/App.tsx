import Header from './components/Header/Header';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Navbar from './components/Navbar/Navbar';

const appStyle = {
  backgroundImage: 'url(https://www.philhealth.gov.ph/images/bg_green.jpg)'
}

const App = () => {
  return (
    <div className='App'
    style={appStyle}>

      <div>
        <Header />
      </div>

      <div>
        <Navbar />
      </div>

      <div>
        <ImageCarousel />
      </div>

      <div>
        Articles
      </div>

      <div>
        Links
      </div>

      <div>
        Footer
      </div>
      
    </div>
  );
}

export default App;