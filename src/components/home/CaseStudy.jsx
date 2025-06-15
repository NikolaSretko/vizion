import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Icon,
  Badge,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoArrowForward, IoRocket, IoTrendingUp, IoGlobe } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const CaseStudy = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.6, 0.8, 1]);
  
  return (
    <Box py={20} bg="white" position="relative" overflow="hidden" ref={ref}>
      {/* Background elements */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        bgImage="linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(245, 245, 250, 0.95)), url('https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        style={{ y, opacity }}
        filter="blur(2px)"
      />

      <Container maxW={'container.xl'} position="relative" zIndex={2}>
        <VStack spacing={16}>
          <MotionFlex
            direction="column"
            align="center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Text
              color="accent.600"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >
              Erfolgsgeschichte
            </Text>
            <MotionHeading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight={800}
              textAlign="center"
              color="gray.800"
              mb={4}
              bgGradient="linear(to-r, brand.600, accent.600)"
              bgClip="text"
            >
              Wie wir Erfolgsgeschichten schreiben
            </MotionHeading>
            <MotionText
              fontSize="lg"
              color="gray.600"
              textAlign="center"
              maxW="800px"
            >
              Entdecken Sie, wie wir unseren Kunden helfen, in der digitalen Welt zu wachsen 
              und ihre E-Commerce-Ziele zu übertreffen.
            </MotionText>
          </MotionFlex>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%" alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              order={{ base: 2, md: 1 }}
            >
              <Stack spacing={8}>
                <Box>
                  <Badge 
                    colorScheme="accent" 
                    variant="solid"
                    fontSize="xs"
                    textTransform="uppercase"
                    px={2}
                    py={1}
                    borderRadius="md"
                    mb={3}
                  >
                    Deep Care 
                  </Badge>
                  <Heading color="gray.800" size="xl" mb={4}>
                    Von 0 auf 7-stellig in 12 Monaten: Deep Care erobert den DACH Raum
                  </Heading>
                  <Text color="gray.600" fontSize="lg">
                    Wie wir einem Health Care Startup geholfen haben, seinen Umsatz zu verzehnfachen und erfolgreich nach Österreich und Schweiz zu expandieren.
                  </Text>
                </Box>
                
                <Divider borderColor="gray.200" />
                
                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={5}>
                  <Stack align="flex-start">
                    <HStack>
                      <Icon as={IoRocket} color="brand.500" boxSize={5} />
                      <Text color="gray.800" fontWeight="bold" fontSize="xl">
                        +920%
                      </Text>
                    </HStack>
                    <Text color="gray.600">Umsatzsteigerung im Vergleich zum Vorjahr</Text>
                  </Stack>
                  <Stack align="flex-start">
                    <HStack>
                      <Icon as={IoGlobe} color="brand.500" boxSize={5} />
                      <Text color="gray.800" fontWeight="bold" fontSize="xl">
                        3
                      </Text>
                    </HStack>
                    <Text color="gray.600">Neue Märkte erschlossen mit lokalisierten Shops</Text>
                  </Stack>
                  <Stack align="flex-start">
                    <HStack>
                      <Icon as={IoTrendingUp} color="brand.500" boxSize={5} />
                      <Text color="gray.800" fontWeight="bold" fontSize="xl">
                        2.3x
                      </Text>
                    </HStack>
                    <Text color="gray.600">ROAS verbessert durch optimierte Marketingstrategien</Text>
                  </Stack>
                </SimpleGrid>
                
                <Button
                  as={Link}
                  to="/about-us/case-studies"
                  variant="outline"
                  colorScheme="brand"
                  rightIcon={<Icon as={IoArrowForward} />}
                  alignSelf="flex-start"
                  size="lg"
                  mt={4}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Alle Erfolgsgeschichten
                </Button>
              </Stack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              order={{ base: 1, md: 2 }}
            >
              <Box
                position="relative"
                rounded="2xl"
                overflow="hidden"
                boxShadow="2xl"
                height="500px"
                transform={{ base: "none", md: "rotate(2deg)" }}
              >
                {/* In a real project, replace with actual case study image */}
                <Box
                  bg="brand.500"
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  backgroundImage="../../../public/3-scaled.png"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VStack>
                    <Text fontSize="3xl" fontWeight="bold" color="white">
                      ISA
                    </Text>
                    {/* <Text color="whiteAlpha.800">Case Study Image</Text> */}
                  </VStack>
                </Box>
                
                {/* Overlay effect */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-t, rgba(10, 11, 17, 0.8), rgba(10, 11, 17, 0) 50%)"
                  zIndex={2}
                />
                
                {/* Dots pattern overlay */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  backgroundImage="url('https://www.transparenttextures.com/patterns/cubes.png')"
                  backgroundSize="300px"
                  opacity={0.1}
                  zIndex={1}
                />
                
                {/* Image caption */}
                <Box 
                  position="absolute" 
                  bottom={0} 
                  left={0} 
                  right={0} 
                  p={6}
                  zIndex={3}
                >
                  <Badge colorScheme="brand" fontSize="sm" mb={2}>Shopware + Marketing Automation</Badge>
                  <Text color="white" fontWeight="medium">
                    Vollständiges Rebranding und Shop-Relaunch mit internationaler Ausrichtung
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default CaseStudy;