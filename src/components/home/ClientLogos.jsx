import { 
  Box, 
  SimpleGrid, 
  Container, 
  Text, 
  Flex, 
  Image, 
  Heading,
  HStack,
  VStack,
  Divider,
  useColorModeValue 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const LogoBox = ({ name, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Flex
        h="100px"
        alignItems="center"
        justifyContent="center"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="md"
        bg="white"
        p={6}
        transition="all 0.3s"
        boxShadow="sm"
        _hover={{
          borderColor: "brand.500",
          transform: "translateY(-5px)",
          boxShadow: "lg"
        }}
      >
        <Text fontSize="xl" fontWeight="bold" color="gray.700">
          {name}
        </Text>
      </Flex>
    </MotionBox>
  );
};

const CertificationBox = ({ name, image, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <VStack
        spacing={3}
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="lg"
        p={5}
        bg="white"
        alignItems="center"
        transition="all 0.3s"
        boxShadow="sm"
        _hover={{
          borderColor: "brand.500",
          transform: "translateY(-5px)",
          boxShadow: "lg"
        }}
      >
        <Box 
          w="50px" 
          h="50px" 
          borderRadius="full" 
          bg="brand.50" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <Text fontSize="xl" fontWeight="bold" color="brand.500">
            {name.charAt(0)}
          </Text>
        </Box>
        <Text fontWeight="bold" color="gray.700" textAlign="center">
          {name}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const ClientLogos = () => {
  const { t } = useTranslation();
  
  // In einem echten Projekt würdest du echte Kundenlogos verwenden
  const logos = [
    { name: 'PREMIUM FASHION' },
    { name: 'TECH SOLUTIONS' },
    { name: 'LIFESTYLE BRAND' },
    { name: 'HOME & LIVING' },
    { name: 'SPORT EQUIPMENT' },
    { name: 'FOOD MARKET' },
    { name: 'BEAUTY BRAND' },
    { name: 'ELECTRONICS' },
  ];

  const certifications = [
    { name: 'Shopware Business Partner', image: '/path/to/shopware.svg' },
    { name: 'Shopify Partner', image: '/path/to/shopify.svg' },
    { name: 'Google Premier Partner', image: '/path/to/google.svg' },
    { name: 'Amazon Partner', image: '/path/to/amazon.svg' },
  ];

  return (
    <Box py={20} bg="white" position="relative" overflow="hidden">
      {/* Background gradient */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        bgGradient="linear(to-b, gray.50, white)"
        opacity={0.7}
      />

      <Container maxW="container.xl" position="relative" zIndex={2}>
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
              Vertrauen
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
              Von führenden Marken vertraut
            </MotionHeading>
            <MotionText
              fontSize="lg"
              color="gray.600"
              textAlign="center"
              maxW="800px"
            >
              Wir sind stolz darauf, mit renommierten Unternehmen aus verschiedenen Branchen zusammenzuarbeiten 
              und gemeinsam digitale Erfolgsgeschichten zu schreiben.
            </MotionText>
          </MotionFlex>

          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={8}
            width="100%"
          >
            {logos.map((logo, index) => (
              <LogoBox key={index} name={logo.name} index={index} />
            ))}
          </SimpleGrid>

          <Divider borderColor="darkBg.700" width="100%" />

          <VStack spacing={8} width="100%">
            <MotionHeading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              textAlign="center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Zertifizierungen & Partnerschaften
            </MotionHeading>

            <SimpleGrid 
              columns={{ base: 1, sm: 2, md: 4 }} 
              spacing={8} 
              width="100%"
            >
              {certifications.map((cert, index) => (
                <CertificationBox 
                  key={index} 
                  name={cert.name} 
                  image={cert.image} 
                  index={index} 
                />
              ))}
            </SimpleGrid>
          </VStack>

          {/* Testimonial Banner */}
          <MotionBox
            width="100%"
            p={8}
            borderRadius="xl"
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            boxShadow="md"
            position="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Flex direction={{ base: 'column', md: 'row' }} align="center">
              <Box 
                flex={1} 
                p={5} 
                borderRadius="full" 
                position="relative"
                display={{ base: 'none', md: 'block' }}
              >
                <Box
                  position="absolute"
                  width="130px"
                  height="130px"
                  borderRadius="full"
                  bgGradient="linear(to-r, brand.100, accent.100)"
                  opacity={0.4}
                  left="50%"
                  top="50%"
                  transform="translate(-50%, -50%)"
                />
                <Text 
                  fontSize="8xl" 
                  fontWeight="bold" 
                  color="brand.500" 
                  textAlign="center"
                  opacity={0.8}
                >
                  "
                </Text>
              </Box>
              <VStack flex={3} spacing={4} align={{ base: 'center', md: 'flex-start' }}>
                <Text fontSize="xl" color="gray.700" fontStyle="italic" textAlign={{ base: 'center', md: 'left' }}>
                  "Die Zusammenarbeit mit VIZIO Commerce hat unseren Online-Shop auf ein neues Level gebracht. 
                  Die professionelle Beratung und technische Umsetzung waren hervorragend, und die Performance-Optimierung 
                  hat zu einer deutlichen Umsatzsteigerung geführt."
                </Text>
                <Box>
                  <Text fontWeight="bold" color="gray.800">Marcus Schmidt</Text>
                  <Text color="gray.600">CEO, Premium Fashion GmbH</Text>
                </Box>
              </VStack>
            </Flex>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default ClientLogos;