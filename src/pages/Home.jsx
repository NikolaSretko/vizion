import { Box } from '@chakra-ui/react';
import ServiceOverview from '../components/home/ServiceOverview';
import ClientLogos from '../components/home/ClientLogos';
import CaseStudy from '../components/home/CaseStudy';
import TechShowcase from '../components/home/TechShowcase';
import Hero from '../components/home/Hero';

const Home = () => {
  return (
    <Box>
      <Hero />
      <ServiceOverview />
      <TechShowcase />
      <ClientLogos />
      <CaseStudy />
    </Box>
  );
};

export default Home;