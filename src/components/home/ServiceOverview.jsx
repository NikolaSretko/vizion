import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  Heading,
  Button,
  Badge,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  FaShoppingCart, 
  FaChartLine, 
  FaServer, 
  FaAmazon, 
  FaArrowRight, 
  FaCode, 
  FaUserCog,
  FaGlobe,
  FaSearch,
  FaMobileAlt,
  FaLock,
  FaTools
} from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const Feature = ({ title, text, icon, link, isNew = false, delay = 0 }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Stack
        as={Link}
        to={link}
        direction="column"
        align="flex-start"
        padding={8}
        rounded="xl"
        bg="white"
        borderWidth="1px"
        borderColor="gray.200"
        height="100%"
        transition="all 0.3s"
        position="relative"
        overflow="hidden"
        _hover={{
          transform: 'translateY(-8px)',
          borderColor: 'brand.500',
          boxShadow: 'xl',
          "& .arrow-icon": {
            transform: "translateX(4px)",
            opacity: 1
          }
        }}
      >
        {isNew && (
          <Badge 
            position="absolute" 
            top={4} 
            right={4} 
            colorScheme="accent" 
            variant="solid"
            fontSize="xs"
            textTransform="uppercase"
            px={2}
            py={1}
            borderRadius="md"
          >
            Neu
          </Badge>
        )}
        
        <Flex
          w={16}
          h={16}
          align="center"
          justify="center"
          color="white"
          rounded="lg"
          bg="brand.500"
          mb={6}
          fontSize="3xl"
          shadow="lg"
        >
          <Icon as={icon} />
        </Flex>
        
        <Heading size="md" mb={3} color="gray.800">
          {title}
        </Heading>
        
        <Text color="gray.600" fontSize="md" flex={1}>
          {text}
        </Text>
        
        <HStack pt={4} mt={2} width="full" justify="space-between" align="center">
          <Text color="brand.400" fontWeight="medium">
            Mehr erfahren
          </Text>
          <Icon 
            as={FaArrowRight} 
            color="brand.400" 
            className="arrow-icon" 
            opacity={0.7}
            transition="all 0.3s ease"
          />
        </HStack>
      </Stack>
    </MotionBox>
  );
};

const ServiceOverview = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  
  return (
    <Box py={24} bg="white" position="relative" overflow="hidden" ref={ref}>
      {/* Background elements */}
      <MotionBox
        position="absolute"
        top="-20%"
        right="-10%"
        width="40%"
        height="40%"
        borderRadius="full"
        bg="brand.500"
        opacity={0.05}
        style={{ y: y1 }}
      />
      <MotionBox
        position="absolute"
        bottom="-20%"
        left="-10%"
        width="40%"
        height="40%"
        borderRadius="full"
        bg="accent.500"
        opacity={0.05}
        style={{ y: y2 }}
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
              Unsere Expertise
            </Text>
            <MotionHeading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight={800}
              textAlign="center"
              bgGradient="linear(to-r, brand.600, accent.600)"
              bgClip="text"
              mb={4}
            >
              {t('services.title')}
            </MotionHeading>
            <MotionText
              fontSize="lg"
              color="gray.600"
              textAlign="center"
              maxW="800px"
            >
              Von der technischen Umsetzung bis zur Performance-Optimierung - wir bieten alle Dienstleistungen, 
              die Sie für Ihren E-Commerce-Erfolg benötigen.
            </MotionText>
          </MotionFlex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} width="100%">
            <Feature
              icon={FaShoppingCart}
              title={t('services.ecommerceTech.title')}
              text="Maßgeschneiderte Onlineshop-Lösungen mit Shopware, Shopify und individueller Webentwicklung."
              link="/services/ecommerce-technology"
              delay={0.1}
            />
            <Feature
              icon={FaChartLine}
              title={t('services.ecommercePerformance.title')}
              text="Umsatzsteigerung durch optimiertes SEA, SEO, Marketing-Automation und Conversion-Optimierung."
              link="/services/ecommerce-performance"
              delay={0.2}
            />
            <Feature
              icon={FaServer}
              title={t('services.itInfrastructure.title')}
              text="Nahtlose Integration, ERP-Anbindung, sicheres Hosting und zuverlässige Wartung Ihrer Systeme."
              link="/services/it-infrastructure"
              delay={0.3}
            />
            <Feature
              icon={FaAmazon}
              title={t('services.marketplaceManagement.title')}
              text="Professionelle Betreuung Ihrer Präsenz auf Amazon, OTTO, Kaufland und weiteren Marktplätzen."
              link="/services/marketplace-management"
              delay={0.4}
            />
            <Feature
              icon={FaCode}
              title="App-Entwicklung"
              text="Native und Cross-Platform-Apps für Android und iOS zur perfekten Ergänzung Ihres Online-Shops."
              link="/services/app-development"
              isNew={true}
              delay={0.5}
            />
            <Feature
              icon={FaUserCog}
              title="UX/UI Design"
              text="Nutzerorientiertes Interface-Design für optimale Conversion-Raten und zufriedene Kunden."
              link="/services/ux-design"
              delay={0.6}
            />
            <Feature
              icon={FaGlobe}
              title="Internationalisierung"
              text="Erschließen Sie neue Märkte mit mehrsprachigen Shops und lokalisierter User-Experience."
              link="/services/internationalization"
              delay={0.7}
            />
            <Feature
              icon={FaSearch}
              title="Shop-Suche & Filterung"
              text="Hochentwickelte Such- und Filterlösungen für bessere Auffindbarkeit und Kundenzufriedenheit."
              link="/services/search-solutions"
              delay={0.8}
            />
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            textAlign="center"
            mt={10}
          >
            <Button
              as={Link}
              to="/services"
              size="lg"
              variant="outline"
              colorScheme="brand"
              rightIcon={<FaArrowRight />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Alle Dienstleistungen entdecken
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default ServiceOverview;