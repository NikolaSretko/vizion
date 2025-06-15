import { 
  Box, 
  Button, 
  useDisclosure, 
  Container,
  Heading,
  Text,
  Flex,
  HStack,
  VStack,
  Icon,
  Badge,
  keyframes,
} from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { IoRocket, IoFlame, IoArrowForward } from 'react-icons/io5';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const GlobalCTA = () => {
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  // Animation for CTA button
  const pulse = keyframes`
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 132, 255, 0.7); }
    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(0, 132, 255, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 132, 255, 0); }
  `;

  const pulseAnimation = `${pulse} 2s infinite`;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Show button after scrolling down 400px
      if (position > 400) {
        onOpen();
      } else {
        onClose();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onOpen, onClose]);

  return (
    <>
      {/* Fixed CTA Button */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="fixed"
            bottom="2rem"
            right="2rem"
            zIndex={100}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              ref={btnRef}
              as={Link}
              to="/contact"
              size="lg"
              borderRadius="full"
              bgGradient="linear(to-r, brand.500, accent.500)"
              color="white"
              boxShadow="0 10px 25px rgba(0, 132, 255, 0.4)"
              rightIcon={<IoRocket />}
              animation={pulseAnimation}
              _hover={{
                transform: 'translateY(-2px)',
                bgGradient: "linear(to-r, brand.400, accent.400)",
                boxShadow: '0 15px 30px rgba(0, 132, 255, 0.5)',
              }}
              _active={{
                transform: 'translateY(0)',
                bgGradient: "linear(to-r, brand.600, accent.600)",
              }}
              px={6}
              fontWeight="bold"
              letterSpacing="wide"
              fontSize="md"
            >
              Lass uns sprechen
            </Button>
          </MotionBox>
        )}
      </AnimatePresence>

      {/* Full width CTA section */}
      <Box 
        py={{ base: 14, md: 20 }} 
        bg="white" 
        position="relative" 
        overflow="hidden"
        borderTop="1px solid"
        borderColor="gray.100"
      >
        {/* Background elements */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-b, rgba(255, 255, 255, 0.9), rgba(240, 240, 250, 0.8))"
          opacity={0.8}
          zIndex={0}
        />
        
        {/* Glowing orb */}
        <Box
          position="absolute"
          top="20%"
          right="10%"
          width="300px"
          height="300px"
          borderRadius="full"
          bg="brand.500"
          filter="blur(100px)"
          opacity={0.15}
          zIndex={1}
        />

        <Container maxW="container.xl" position="relative" zIndex={2}>
          <MotionFlex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify="space-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <VStack 
              spacing={5} 
              align={{ base: 'center', lg: 'flex-start' }}
              maxW={{ base: '100%', lg: '60%' }}
              textAlign={{ base: 'center', lg: 'left' }}
              mb={{ base: 10, lg: 0 }}
            >
              <Badge 
                colorScheme="accent" 
                fontSize="sm" 
                px={3} 
                py={1} 
                borderRadius="full" 
                textTransform="uppercase"
              >
                Starten Sie jetzt
              </Badge>
              
              <Heading 
                as="h2" 
                fontSize={{ base: '2xl', md: '4xl' }} 
                fontWeight="bold" 
                color="gray.800"
                lineHeight="1.2"
                bgGradient="linear(to-r, brand.600, accent.600)"
                bgClip="text"
              >
                Bereit, Ihren E-Commerce auf das nächste Level zu bringen?
              </Heading>
              
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="600px">
                Vereinbaren Sie ein kostenloses Beratungsgespräch mit unseren E-Commerce-Experten 
                und erfahren Sie, wie wir Ihnen bei der Skalierung Ihres Online-Geschäfts helfen können.
              </Text>
              
              <HStack spacing={8} mt={4} display={{ base: 'none', md: 'flex' }}>
                <HStack>
                  <Icon as={IoFlame} color="brand.500" boxSize={5} />
                  <Text color="gray.700">Schnelle Reaktionszeit</Text>
                </HStack>
                <HStack>
                  <Icon as={IoRocket} color="brand.500" boxSize={5} />
                  <Text color="gray.700">Maßgeschneiderte Lösungen</Text>
                </HStack>
              </HStack>
            </VStack>
            
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                as={Link}
                to="/contact"
                size="lg"
                height="60px"
                px={8}
                fontSize="lg"
                rightIcon={<IoArrowForward />}
                colorScheme="brand"
                bgGradient="linear(to-r, brand.500, accent.500)"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                  bgGradient: "linear(to-r, brand.400, accent.400)",
                }}
                _active={{
                  transform: 'translateY(0)',
                  boxShadow: 'md',
                }}
              >
                Jetzt beraten lassen
              </Button>
            </MotionBox>
          </MotionFlex>
        </Container>
      </Box>
    </>
  );
};

export default GlobalCTA;