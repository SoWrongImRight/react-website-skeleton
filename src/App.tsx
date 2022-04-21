import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout
import Layout from './layout';

// Import Pages
import Home from './pages/Home';

// Import Contexts
import { ArticleProvider } from './contexts/articleContext';

// Style Imports
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from './styles/theme';

// Lazy load
const About = React.lazy(() => import('./pages/About'));
const Contact =React.lazy(() => import('./pages/Contact'));
const Articles = React.lazy(() => import('./pages/Articles'));
const ArticleList = React.lazy(() => import('./pages/Articles/ArticleList'));
const Article = React.lazy(() => import('./pages/Articles/Article'));

function App() {
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={primaryTheme}>

        <ArticleProvider>
          <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="articles" element={<Articles />}>
                <Route path="" element={<ArticleList />} />
                <Route path=":id" element={<Article />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          </Router>
        </ArticleProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
