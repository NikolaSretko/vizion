import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Link,
  Heading,
  IconButton,
  Input,
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
      fontSize={{ base: "sm", md: "md" }}
      fontWeight="bold" 
      color="gray.800" 
      mb={{ base: 1, md: 2 }}
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
    fontSize={{ base: "xs", md: "xs" }}
    _hover={{ 
      color: 'brand.500',
      textDecoration: 'none' 
    }}
    mb={{ base: 1, md: 1 }}
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
      w={8}
      h={8}
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
      size="sm"
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
      <Container as={Stack} maxW="container.xl" py={{ base: 6, md: 10 }}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 5 }} spacing={{ base: 4, md: 6 }}>
          <Stack align="flex-start" spacing={{ base: 2, md: 3 }}>
            <Box>
              <Box as="img" src="/logo.svg" alt="Vizionists Logo" height={{ base: "30px", md: "35px" }} mb={2} />
              <Text 
                color="gray.600" 
                fontSize={{ base: "xs", md: "xs" }} 
                maxW="250px"
                lineHeight="1.3"
              >
                Ihr Partner für digitale Lösungen und E-Commerce.
              </Text>
            </Box>
            <Stack direction="row" spacing={2} mt={1}>
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

          <Stack align="flex-start" spacing={1}>
            <ListHeader>{t('header.services')}</ListHeader>
            <FooterLink to="/services/ecommerce-technology">{t('services.ecommerceTech.title')}</FooterLink>
            <FooterLink to="/services/ecommerce-performance">{t('services.ecommercePerformance.title')}</FooterLink>
            <FooterLink to="/services/it-infrastructure">{t('services.itInfrastructure.title')}</FooterLink>
            <FooterLink to="/services/marketplace-management">{t('services.marketplaceManagement.title')}</FooterLink>
            <FooterLink to="/services/app-development">App-Entwicklung</FooterLink>
          </Stack>

          <Stack align="flex-start" spacing={1}>
            <ListHeader>Unternehmen</ListHeader>
            <FooterLink to="/about-us">{t('aboutUs.mission')}</FooterLink>
            <FooterLink to="/about-us/team">{t('aboutUs.team')}</FooterLink>
            <FooterLink to="/about-us/case-studies">{t('aboutUs.caseStudies')}</FooterLink>
            <FooterLink to="/about-us/testimonials">{t('aboutUs.testimonials')}</FooterLink>
            <FooterLink to="/about-us/careers">{t('aboutUs.careers')}</FooterLink>
          </Stack>

          <Stack align="flex-start" spacing={1}>
            <ListHeader>Nützliche Links</ListHeader>
            <FooterLink to="/consulting">{t('header.consulting')}</FooterLink>
            <FooterLink to="/solutions">{t('header.solutions')}</FooterLink>
            <FooterLink to="/resources">{t('header.resources')}</FooterLink>
            <FooterLink to="/resources/blog">Blog</FooterLink>
            <FooterLink to="/contact">{t('header.contact')}</FooterLink>
          </Stack>

          <Stack align="flex-start" spacing={3}>
            <ListHeader>Kontakt</ListHeader>
            
            <HStack spacing={2}>
              <Icon as={FaPhone} color="brand.500" boxSize={{ base: 3, md: 3 }} />
              <Text fontSize={{ base: "xs", md: "xs" }}>+49 (0) 89 1234567</Text>
            </HStack>
            
            <HStack spacing={2}>
              <Icon as={FaEnvelope} color="brand.500" boxSize={{ base: 3, md: 3 }} />
              <Text fontSize={{ base: "xs", md: "xs" }}>info@vizio-commerce.com</Text>
            </HStack>
            
            <HStack spacing={2} align="flex-start">
              <Icon as={FaMapMarkerAlt} color="brand.500" mt={0.5} boxSize={{ base: 3, md: 3 }} />
              <Text fontSize={{ base: "xs", md: "xs" }} lineHeight="1.3">
                Musterstraße 123<br />80331 München
              </Text>
            </HStack>
            
            <MotionBox
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              width="100%"
            >
              <Box
                position="relative"
                bg="gray.50" 
                borderRadius="md" 
                p={{ base: 2, md: 3 }}
                borderWidth="1px"
                borderColor="gray.200"
                boxShadow="sm"
              >
                <Text fontWeight="medium" mb={1} color="gray.700" fontSize="xs">Newsletter</Text>
                <HStack spacing={1}>
                  <Input 
                    placeholder="Ihre E-Mail"
                    bg="white"
                    borderColor="gray.200"
                    size="sm"
                    fontSize="xs"
                    _focus={{
                      borderColor: "brand.500",
                      boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                    }}
                  />
                  <IconButton
                    aria-label="Newsletter abonnieren"
                    icon={<FaArrowRight />}
                    size="sm"
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
          py={{ base: 3, md: 4 }}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 1, md: 2 }}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text fontSize="xs" color="gray.500">
            © {year} VIZIO Commerce. {t('footer.copyright')}
          </Text>
          <Stack direction="row" spacing={{ base: 2, md: 4 }}>
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