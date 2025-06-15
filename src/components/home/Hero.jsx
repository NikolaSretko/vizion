import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  Flex,
  VStack,
  HStack,
  keyframes,
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRef, useState, useEffect } from 'react';
import { FaRocket, FaChevronDown, FaPlay, FaLightbulb } from 'react-icons/fa';
import { IoCodeSlash, IoSparkles } from 'react-icons/io5';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const VideoHero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  
  // Animation keyframes
  const float = keyframes`
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
    100% { transform: translateY(0) rotate(0deg); }
  `;
  
  const pulse = keyframes`
    0% { opacity: 0.4; }
    50% { opacity: 0.7; }
    100% { opacity: 0.4; }
  `;
  
  const floatAnimation = `${float} 6s ease-in-out infinite`;
  const pulseAnimation = `${pulse} 3s ease-in-out infinite`;
  
  // Make sure video is visible
  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Force playback
      video.play().catch(error => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <MotionBox
      ref={ref}
      position="relative"
      height={{ base: "100vh", md: "100vh" }}
      minH="100vh"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt="0"
    >
      {/* Video Background with Parallax Effect */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
        style={{ y, opacity, scale }}
        overflow="hidden"
      >
        {/* Light overlay gradient for parallax effect */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-b, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5))"
          zIndex={2}
        />
        
        {/* Subtle pattern overlay for texture */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')"
          opacity={0.6}
          zIndex={3}
        />
        
        {/* CPU video background */}
        <Box
          as="video"
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          position="absolute"
          objectFit="cover"
          width="100%"
          height="100%"
          zIndex={1}
          src="/videos/cpu_vid.mp4"
          opacity={1}
          transition="opacity 1s ease"
          filter="brightness(1.2) contrast(1.1) grayscale(0.2)"
        />
        
      </MotionBox>

      {/* Digital circuit overlay */}
      <MotionBox
        position="absolute"
        top="10%"
        left="5%"
        width="90%"
        height="80%"
        borderRadius="full"
        bgGradient="linear(to-r, brand.300, accent.300)"
        filter="blur(150px)"
        opacity={0.2}
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        zIndex={1}
        animation={pulseAnimation}
      />
      
      {/* Secondary glow */}
      <MotionBox
        position="absolute"
        bottom="5%"
        right="15%"
        width="50%"
        height="40%"
        borderRadius="full"
        bg="yellow.200"
        filter="blur(120px)"
        opacity={0.1}
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
        zIndex={1}
        animation={`${pulseAnimation} 4s 1s ease-in-out infinite`}
      />

      {/* Content */}
      <Container maxW={'container.xl'} position="relative" zIndex={4} height="100%" display="flex" alignItems="center" pt="80px">
        <MotionFlex
          direction="column"
          align={{ base: "center", md: "flex-start" }}
          justify="center"
          w="full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y: textY }}
        >
          <VStack spacing={8} align={{ base: "center", md: "flex-start" }} maxW={{ base: "100%", md: "70%" }}>
            <MotionText
              color="accent.600"
              fontWeight="bold"
              fontSize="xl"
              letterSpacing="wide"
              textTransform="uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digitale Transformation
            </MotionText>
            
            <MotionHeading
              as="h1"
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
              fontWeight={800}
              lineHeight={1.2}
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              letterSpacing="tight"
              textShadow="0 0 20px rgba(0, 132, 255, 0.2)"
            >
              Innovationen 
              <Box as="span" display="block">
                verwirklichen
              </Box>
            </MotionHeading>
            
            <MotionText
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.700"
              maxW="700px"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              fontWeight="medium"
              letterSpacing="wide"
            >
              Wir entwickeln maßgeschneiderte digitale Lösungen, die Ihr Unternehmen transformieren.
              Fortschrittliche Technologien, innovative Ideen und leidenschaftliche Expertise für Ihren Erfolg.
            </MotionText>
            
            <MotionFlex
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              gap={4}
              mt={4}
              w={{ base: "full", sm: "auto" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                as={Link}
                to="/contact"
                size="lg"
                px={8}
                py={7}
                fontSize="md"
                fontWeight="bold"
                variant="primary"
                rightIcon={<Icon as={FaRocket} />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px rgba(0, 132, 255, 0.5)',
                }}
              >
                {t('hero.cta')}
              </Button>
              
              <Button
                as={Link}
                to="/services"
                size="lg"
                px={8}
                py={7}
                fontSize="md"
                fontWeight="bold"
                variant="glassmorphic"
                leftIcon={<Icon as={FaPlay} />}
                _hover={{
                  transform: 'translateY(-2px)',
                }}
              >
                Unsere Services
              </Button>
            </MotionFlex>

            <HStack 
              spacing={10} 
              mt={16}
              opacity={0.9}
              display={{ base: 'none', md: 'flex' }}
            >
              <VStack spacing={1} align="center">
                <Text fontSize="4xl" fontWeight="bold" color="gray.800">15+</Text>
                <Text fontSize="sm" color="gray.600">Jahre Erfahrung</Text>
              </VStack>
              <Box h="50px" w="1px" bg="gray.300" />
              <VStack spacing={1} align="center">
                <Text fontSize="4xl" fontWeight="bold" color="gray.800">500+</Text>
                <Text fontSize="sm" color="gray.600">Projekte</Text>
              </VStack>
              <Box h="50px" w="1px" bg="gray.300" />
              <VStack spacing={1} align="center">
                <Text fontSize="4xl" fontWeight="bold" color="gray.800">100%</Text>
                <Text fontSize="sm" color="gray.600">Maßgeschneidert</Text>
              </VStack>
            </HStack>
          </VStack>
        </MotionFlex>
      </Container>

      {/* Scroll indicator */}
      <MotionBox
        position="absolute"
        bottom="5%"
        left="50%"
        transform="translateX(-50%)"
        zIndex={4}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <MotionBox
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <Icon as={FaChevronDown} color="gray.800" boxSize={8} opacity={0.7} />
        </MotionBox>
      </MotionBox>
      
      {/* Optional floating elements for visual interest */}
      <MotionBox
        position="absolute"
        top="30%"
        right="10%"
        width="150px"
        height="150px"
        zIndex={3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2, duration: 1 }}
        bgImage="url('https://www.transparenttextures.com/patterns/cubes.png')"
        bgSize="cover"
        borderRadius="full"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
        }}
      />
      
      <MotionBox
        position="absolute"
        bottom="20%"
        left="15%"
        width="100px"
        height="100px"
        zIndex={3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.5, duration: 1 }}
        bgImage="url('https://www.transparenttextures.com/patterns/cubes.png')"
        bgSize="cover"
        borderRadius="full"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -30])
        }}
      />
    </MotionBox>
  );
};

export default VideoHero;