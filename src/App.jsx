import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Box, Spinner, Flex, keyframes } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import theme from './theme';
import './i18n';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));

// Create placeholder pages
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '100px 20px', textAlign: 'center' }}>
    <h1>{title} Page</h1>
    <p>This page is under construction.</p>
  </div>
);

// Loading animation
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const scaleUp = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

// Custom loading component
const PageLoader = () => {
  return (
    <Flex 
      height="100vh" 
      width="100%" 
      alignItems="center" 
      justifyContent="center" 
      flexDirection="column"
      bg="white"
    >
      <Box 
        as="img" 
        src="/logo.svg" 
        alt="Logo" 
        height="80px" 
        mb={8}
        animation={`${scaleUp} 0.8s ease-in-out`}
      />
      <Spinner 
        thickness="4px"
        speed="0.85s"
        emptyColor="gray.200"
        color="brand.500"
        size="xl"
        mb={4}
      />
      <Box 
        height="3px" 
        width="150px" 
        bg="gray.100" 
        borderRadius="full" 
        overflow="hidden"
      >
        <Box 
          height="100%" 
          width="60%" 
          bg="brand.500" 
          borderRadius="full"
          animation={`${fadeIn} 1.5s infinite alternate`}
        />
      </Box>
    </Flex>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        {loading ? (
          <PageLoader />
        ) : (
          <Router>
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<PlaceholderPage title="Services" />} />
                  <Route path="/services/:serviceType" element={<PlaceholderPage title="Service Detail" />} />
                  <Route path="/consulting" element={<PlaceholderPage title="Consulting" />} />
                  <Route path="/solutions" element={<PlaceholderPage title="Solutions" />} />
                  <Route path="/about-us" element={<PlaceholderPage title="About Us" />} />
                  <Route path="/about-us/:section" element={<PlaceholderPage title="About Section" />} />
                  <Route path="/resources" element={<PlaceholderPage title="Resources" />} />
                  <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
                  <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
                  <Route path="/imprint" element={<PlaceholderPage title="Imprint" />} />
                  <Route path="/terms" element={<PlaceholderPage title="Terms" />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </Layout>
          </Router>
        )}
      </ChakraProvider>
    </ParallaxProvider>
  );
}

export default App;