import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  HStack,
  VStack,
  Badge,
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaVuejs, 
  FaNodeJs, 
  FaMobile,
  FaDatabase,
  FaServer,
  FaCode,
  FaPaintBrush,
  FaLaptopCode
} from 'react-icons/fa';
import { SiShopware, SiJavascript, SiGooglecloud, SiAdobecreativecloud, SiNextdotjs, SiFigma } from 'react-icons/si';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const TechCard = ({ icon, name, description, index, badge = null }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Flex
        direction="column"
        bg="white"
        p={{ base: 5, md: 6 }}
        borderRadius="xl"
        boxShadow="md"
        border="1px solid"
        borderColor="gray.200"
        height="100%"
        position="relative"
        transition="all 0.3s"
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "xl",
          borderColor: "brand.500",
        }}
      >
        {badge && (
          <Badge
            position="absolute"
            top={3}
            right={3}
            colorScheme="accent"
            fontSize="xs"
            px={2}
            py={1}
            borderRadius="full"
          >
            {badge}
          </Badge>
        )}
        <Flex
          w={{ base: 10, md: 12 }}
          h={{ base: 10, md: 12 }}
          align="center"
          justify="center"
          borderRadius="full"
          bg="brand.500"
          mb={{ base: 3, md: 4 }}
        >
          <Icon as={icon} color="white" boxSize={{ base: 5, md: 6 }} />
        </Flex>
        <Heading size={{ base: "sm", md: "md" }} mb={{ base: 1, md: 2 }} color="gray.800">
          {name}
        </Heading>
        <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
          {description}
        </Text>
      </Flex>
    </MotionBox>
  );
};

const TechShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  
  const technologies = [
    { 
      icon: FaLaptopCode, 
      name: "Web-Entwicklung", 
      description: "Moderne Webseiten und Applikationen mit React, Vue.js, Angular und NextJS.",
      badge: "Kernbereich" 
    },
    { 
      icon: FaCode, 
      name: "Software-Entwicklung", 
      description: "Maßgeschneiderte SaaS-Lösungen für spezifische Unternehmensanforderungen."
    },
    { 
      icon: FaMobile, 
      name: "App-Entwicklung", 
      description: "Native und Cross-Platform Mobile Apps für iOS und Android.",
      badge: "Neu" 
    },
    { 
      icon: FaDatabase, 
      name: "IT-Administration", 
      description: "Professionelle Betreuung und Management Ihrer IT-Infrastruktur." 
    },
    { 
      icon: FaPaintBrush, 
      name: "UI/UX Design", 
      description: "Nutzerorientiertes Interface-Design für optimale Kundenerfahrung." 
    },
    { 
      icon: SiGooglecloud, 
      name: "Cloud-Lösungen", 
      description: "Skalierbare Cloud-Infrastruktur für Ihre digitalen Anwendungen." 
    },
  ];

  return (
    <Box py={20} bg="gray.50" position="relative" overflow="hidden" ref={ref}>
      {/* Parallax Background Elements */}
      <MotionBox
        position="absolute"
        width="40%"
        height="80%"
        right="-10%"
        top="10%"
        borderRadius="full"
        bg="brand.100"
        filter="blur(60px)"
        style={{ y }}
        opacity={0.5}
      />
      <MotionBox
        position="absolute"
        width="30%"
        height="60%"
        left="-5%"
        bottom="10%"
        borderRadius="full"
        bg="accent.100"
        filter="blur(70px)"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]) }}
        opacity={0.3}
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
              Technologien & Expertise
            </Text>
            <MotionHeading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight={800}
              textAlign="center"
              bgGradient="linear(to-r, brand.400, accent.400)"
              bgClip="text"
              mb={4}
            >
              Unsere Technologien
            </MotionHeading>
            <MotionText
              fontSize="lg"
              color="gray.600"
              textAlign="center"
              maxW="800px"
            >
              Wir setzen auf modernste Technologien und bewährte Frameworks, um innovative 
              und zukunftssichere Lösungen für Ihr Unternehmen zu entwickeln.
            </MotionText>
          </MotionFlex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 5, md: 8 }} width="100%">
            {technologies.map((tech, index) => (
              <TechCard
                key={tech.name}
                icon={tech.icon}
                name={tech.name}
                description={tech.description}
                index={index}
                badge={tech.badge}
              />
            ))}
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            width="100%"
            p={8}
            borderRadius="xl"
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            boxShadow="md"
          >
            <VStack spacing={4}>
              <Heading as="h3" size="lg" textAlign="center" color="gray.800">
                Unser Full-Service Ansatz
              </Heading>
              
              <Text color="gray.600" textAlign="center" fontSize="lg">
                Mit über 15 Jahren Erfahrung bieten wir Ihnen die gesamte Expertise für Ihren digitalen Erfolg
              </Text>
              
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 4, md: 6 }} pt={6} width="100%">
                <VStack spacing={2} align="center">
                  <Box 
                    w={{ base: "40px", md: "50px" }}
                    h={{ base: "40px", md: "50px" }}
                    borderRadius="full" 
                    bg="brand.400" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    mb={2}
                  >
                    <Text fontWeight="bold" color="white" fontSize={{ base: "sm", md: "md" }}>1</Text>
                  </Box>
                  <Heading size="sm" color="gray.700">Beratung</Heading>
                  <Text color="gray.600" fontSize="sm" textAlign="center">
                    Strategische Analyse und Konzeptentwicklung
                  </Text>
                </VStack>
                
                <VStack spacing={2} align="center">
                  <Box 
                    w={{ base: "40px", md: "50px" }}
                    h={{ base: "40px", md: "50px" }}
                    borderRadius="full" 
                    bg="brand.400" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    mb={2}
                  >
                    <Text fontWeight="bold" color="white" fontSize={{ base: "sm", md: "md" }}>2</Text>
                  </Box>
                  <Heading size="sm" color="gray.700">Design</Heading>
                  <Text color="gray.600" fontSize="sm" textAlign="center">
                    UI/UX Design und Prototyping
                  </Text>
                </VStack>
                
                <VStack spacing={2} align="center">
                  <Box 
                    w={{ base: "40px", md: "50px" }}
                    h={{ base: "40px", md: "50px" }}
                    borderRadius="full" 
                    bg="brand.400" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    mb={2}
                  >
                    <Text fontWeight="bold" color="white" fontSize={{ base: "sm", md: "md" }}>3</Text>
                  </Box>
                  <Heading size="sm" color="gray.700">Entwicklung</Heading>
                  <Text color="gray.600" fontSize="sm" textAlign="center">
                    Technische Umsetzung mit modernsten Technologien
                  </Text>
                </VStack>
                
                <VStack spacing={2} align="center">
                  <Box 
                    w={{ base: "40px", md: "50px" }}
                    h={{ base: "40px", md: "50px" }}
                    borderRadius="full" 
                    bg="brand.400" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    mb={2}
                  >
                    <Text fontWeight="bold" color="white" fontSize={{ base: "sm", md: "md" }}>4</Text>
                  </Box>
                  <Heading size="sm" color="gray.700">Wachstum</Heading>
                  <Text color="gray.600" fontSize="sm" textAlign="center">
                    Kontinuierliche Optimierung und Skalierung
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default TechShowcase;