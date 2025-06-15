import { Box, Container, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import GlobalCTA from '../common/GlobalCTA';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <ScrollToTop />
      <Header />
      <Box as="main" flex="1" pt="0">
        <Suspense fallback={<Box>Loading...</Box>}>
          {children}
        </Suspense>
      </Box>
      <GlobalCTA />
      <Footer />
    </Flex>
  );
};

export default Layout;