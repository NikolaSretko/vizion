import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Link,
  Heading,
  ButtonGroup,
  IconButton,
  Input,
  Button,
  Divider,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowRight 
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ListHeader = ({ children }) => {
  return (
    <Heading 
      as="h4" 
      fontSize="lg" 
      fontWeight="bold" 
      color="gray.800" 
      mb={4}
      whiteSpace="nowrap"
    >
      {children}
    </Heading>
  );
};

const FooterLink = ({ children, to }) => (
  <Link 
    as={RouterLink} 
    to={to} 
    color="gray.600" 
    _hover={{ 
      color: 'brand.500',
      textDecoration: 'none' 
    }}
    mb={2}
    display="inline-block"
  >
    {children}
  </Link>
);

const SocialButton = ({ children, label, href }) => {
  return (
    <IconButton
      bg="gray.100"
      color="gray.700"
      rounded="full"
      w={10}
      h={10}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="all 0.3s ease"
      _hover={{
        bg: 'brand.500',
        color: 'white',
        transform: 'translateY(-2px)',
      }}
      aria-label={label}
      size="md"
      icon={children}
    />
  );
};

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  
  return (
    <Box
      bg="white"
      color="gray.600"
      borderTop="1px solid"
      borderColor="gray.100"
    >
      <Container as={Stack} maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align="flex-start" spacing={6}>
            <Box>
              <Box as="img" src="/logo.svg" alt="Vizionists Logo" height="50px" mb={4} />
              <Text 
                fontSize="2xl" 
                fontWeight="extrabold" 
                bgGradient="linear(to-r, brand.400, accent.400)" 
                bgClip="text"
                letterSpacing="tight"
                display="none"
              >
                VIZIO
              </Text>
              <Text color="gray.400" maxW="300px">
                Ihr Partner für digitalen Handel und E-Commerce-Lösungen. 
                Wir bringen Ihr Geschäft auf das nächste Level.
              </Text>
            </Box>
            <Stack direction="row" spacing={4}>
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="LinkedIn" href="#">
                <FaLinkedin />
              </SocialButton>
              <SocialButton label="Facebook" href="#">
                <FaFacebook />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>{t('header.services')}</ListHeader>
            <FooterLink to="/services/ecommerce-technology">{t('services.ecommerceTech.title')}</FooterLink>
            <FooterLink to="/services/ecommerce-performance">{t('services.ecommercePerformance.title')}</FooterLink>
            <FooterLink to="/services/it-infrastructure">{t('services.itInfrastructure.title')}</FooterLink>
            <FooterLink to="/services/marketplace-management">{t('services.marketplaceManagement.title')}</FooterLink>
            <FooterLink to="/services/app-development">App-Entwicklung</FooterLink>
            <FooterLink to="/services/ux-design">UX/UI Design</FooterLink>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Unternehmen</ListHeader>
            <FooterLink to="/about-us">{t('aboutUs.mission')}</FooterLink>
            <FooterLink to="/about-us/team">{t('aboutUs.team')}</FooterLink>
            <FooterLink to="/about-us/case-studies">{t('aboutUs.caseStudies')}</FooterLink>
            <FooterLink to="/about-us/testimonials">{t('aboutUs.testimonials')}</FooterLink>
            <FooterLink to="/about-us/careers">{t('aboutUs.careers')}</FooterLink>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Nützliche Links</ListHeader>
            <FooterLink to="/consulting">{t('header.consulting')}</FooterLink>
            <FooterLink to="/solutions">{t('header.solutions')}</FooterLink>
            <FooterLink to="/resources">{t('header.resources')}</FooterLink>
            <FooterLink to="/resources/blog">Blog</FooterLink>
            <FooterLink to="/contact">{t('header.contact')}</FooterLink>
          </Stack>

          <Stack align="flex-start" spacing={6}>
            <ListHeader>Kontakt</ListHeader>
            
            <HStack spacing={3}>
              <Icon as={FaPhone} color="brand.500" />
              <Text>+49 (0) 89 1234567</Text>
            </HStack>
            
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color="brand.500" />
              <Text>info@vizio-commerce.com</Text>
            </HStack>
            
            <HStack spacing={3} align="flex-start">
              <Icon as={FaMapMarkerAlt} color="brand.500" mt={1} />
              <Text>Musterstraße 123<br />80331 München<br />Deutschland</Text>
            </HStack>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              width="100%"
            >
              <Box
                position="relative"
                bg="gray.50" 
                borderRadius="md" 
                p={4}
                borderWidth="1px"
                borderColor="gray.200"
                boxShadow="sm"
              >
                <Text fontWeight="medium" mb={2} color="gray.700">Newsletter abonnieren</Text>
                <HStack>
                  <Input 
                    placeholder="Ihre E-Mail"
                    bg="white"
                    borderColor="gray.200"
                    _focus={{
                      borderColor: "brand.500",
                      boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                    }}
                  />
                  <IconButton
                    aria-label="Newsletter abonnieren"
                    icon={<FaArrowRight />}
                    colorScheme="brand"
                    bgGradient="linear(to-r, brand.500, accent.500)"
                    _hover={{
                      bgGradient: "linear(to-r, brand.400, accent.400)",
                    }}
                  />
                </HStack>
              </Box>
            </MotionBox>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor="gray.100"
      >
        <Container
          as={Stack}
          maxW="container.xl"
          py={6}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text fontSize="sm">
            © {year} VIZIO Commerce. {t('footer.copyright')}
          </Text>
          <Stack direction="row" spacing={6}>
            <FooterLink to="/privacy">{t('footer.privacy')}</FooterLink>
            <FooterLink to="/imprint">{t('footer.imprint')}</FooterLink>
            <FooterLink to="/terms">{t('footer.terms')}</FooterLink>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;