import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Ayodele Ayoola Portfolio</title>
        <meta
          name="description"
          content="This is Ayodele Ayoola's Portofolio (Lazy Programmer). A Software Developer with 5+ years of experience in building mobile and web application. Currently based in the United Kingdom."
        />
        <meta
          name="keywords"
          content="ayoola, ayodele, lazy programmer, lazy , programmer, ayodele ayoola, portfolio , software , programming , software developer"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Ayodele Ayoola Portfolio" />
        <meta
          property="og:description"
          content="This is Ayodele Ayoola's Portofolio (Lazy Programmer). A Software Developer with 5+ years of experience in building mobile and web application. Currently based in the United Kingdom."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dkrutkbjs/image/upload/v1724792482/j611cx4rnanl2abm77xf.jpg"
        />
        <meta property="og:url" content="https://lazyszn.vercel.app/" />
        <meta name="twitter:title" content="Ayodele Ayoola Portfolio" />
        <meta
          name="twitter:description"
          content="This is Ayodele Ayoola's Portofolio (Lazy Programmer). A Software Developer with 5+ years of experience in building mobile and web application. Currently based in the United Kingdom."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dkrutkbjs/image/upload/v1724792482/j611cx4rnanl2abm77xf.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
