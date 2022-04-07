import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout
import Banner from './layout/Banner';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar'

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import ArticleList from './pages/Articles/ArticleList';
import Article from './pages/Articles/Article';

// Import Contexts
import { ArticleProvider } from './contexts/articleContext';

// Style Imports
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from './styles/theme';


function App() {
  const [isBanner, setIsBanner] = useState(false)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={primaryTheme}>
        {isBanner && <Banner />}
        <Header />
        <ArticleProvider>
          <Router>
            <Navbar />
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="articles" element={<Articles />}>
                <Route path="" element={<ArticleList />} />
                <Route path=":id" element={<Article />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </ArticleProvider>
        <Footer />      
      </ThemeProvider>
    </>
  );
}

export default App;
