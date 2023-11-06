import { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import Hero from './components/Hero/Hero';
import Header from '../common/Header';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Navbar from '../common/Navbar';
import HeroTwo from './components/Hero/HeroTwo';
import Links from './components/Links/Links';
import { Article, getArticles } from '../../services/articles'
import Footer from '../common/Footer';
import ScrollButton from '../common/ScrollToTop/ScrollButton'; 

import Aos from "aos"
import 'aos/dist/aos.css'

const appStyle = {
  backgroundImage: 'url(https://www.philhealth.gov.ph/images/bg_green.jpg)'
}

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 1500})
}, [])

  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(()=> {
    getArticles().then(articles=>setArticles(articles));
    
  }, []);

  return (
    <div className='App'
    style={appStyle}
    >

      <div>
        <Header />
      </div>
  
      <div >
        <Navbar />
      </div>

      <div>
        <ImageCarousel />
      </div>

      <div>
        <Grid container>
          { articles[0] && 
            <Hero title={articles[0].title} body={articles[0].body} images={articles[0].images} links={articles[0].links} />
          }

          { articles[1] && 
            <HeroTwo title={articles[1].title} body={articles[1].body} images={articles[1].images} links={articles[1].links} />
          }

          { articles[2] && 
            <Hero title={articles[2].title} body={articles[2].body} images={articles[2].images} links={articles[2].links} />
          }
          
          { articles[3] && 
            <HeroTwo title={articles[3].title} body={articles[3].body} images={articles[3].images} links={articles[3].links} />
          }
          
        </Grid>
        
      </div>

      <div>
        <Links />
      </div>

      <ScrollButton />

      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Home;