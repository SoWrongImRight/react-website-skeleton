import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout
import Layout from './layout';

// Import Pages
import Home from './pages/Home';

// Import QueryClient
import { ArticleQueryProvider } from "./reactQuery/queryClient";
import { ReactQueryDevtools} from 'react-query/devtools'

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
            <ArticleQueryProvider>


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
            <ReactQueryDevtools />
          </Layout>
          </Router>

            </ArticleQueryProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
