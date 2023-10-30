import { Grid } from '@mui/material';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Navbar from './components/Navbar/Navbar';
import articles from './services/articles'

const appStyle = {
  backgroundImage: 'url(https://www.philhealth.gov.ph/images/bg_green.jpg)'
}

const App = () => {

  const articleSection = [];
  for (let i = 0; i > articles.length; i++) {
    const article = articles[i];
    articleSection.push(
      <Hero title={article.title} body={article.body}/>
    )
  }
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
        <Grid container>
          {
            articles.map((article) => (
              <Hero title={article.title} body={article.body} />
            ))
          }
        </Grid>
        
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