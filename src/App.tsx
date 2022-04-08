import { useState, lazy,  Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import ErrorBoundary from "./components/ErrorBoundary";
import Spinner from './components/Spinner';

// Import Layout
import Banner from './layout/Banner';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar'

// Import Pages
import Home from './pages/Home';

// Import Contexts
import { ArticleProvider } from './contexts/articleContext';

// Style Imports
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from './styles/theme';

// Lazy Loads
const About = lazy(() => import('./pages/About'));
const Article = lazy(() => import('./pages/Articles/Article'));
const ArticleList = lazy(() => import('./pages/Articles/ArticleList'));
const Articles = lazy(() => import('./pages/Articles'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [isBanner, setIsBanner] = useState(false)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={primaryTheme}>
        {isBanner && <Banner />}
        <Header />
        <ArticleProvider>
        <ErrorBoundary>
          <Router>
            <Navbar />
            <Sidebar />
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="articles" element={<Articles />}>
                  <Route path="" element={<ArticleList />} />
                  <Route path=":id" element={<Article />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Router>
        </ErrorBoundary>
        </ArticleProvider>
        <Footer />      
      </ThemeProvider>
    </>
  );
}

export default App;
