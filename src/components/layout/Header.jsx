import { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  HStack, 
  IconButton, 
  Button, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  useDisclosure, 
  Container,
  Text,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Divider,
  Badge,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { IoRocket } from 'react-icons/io5';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const NavLink = ({ children, to, isActive }) => {
  return (
    <ChakraLink
      as={Link}
      to={to}
      px={2}
      py={1}
      position="relative"
      fontWeight="semibold"
      fontSize="sm"
      letterSpacing="0.3px"
      color={isActive ? 'brand.500' : 'gray.700'}
      _hover={{
        textDecoration: 'none',
        color: 'brand.500',
      }}
      transition="all 0.2s ease"
    >
      {children}
      {isActive && (
        <MotionBox
          position="absolute"
          bottom="-6px"
          left="0"
          right="0"
          height="3px"
          bg="brand.500"
          layoutId="underline"
          borderRadius="full"
        />
      )}
    </ChakraLink>
  );
};

const MobileNavItem = ({ children, to, onClick }) => (
  <ChakraLink 
    as={Link} 
    to={to} 
    py={3} 
    px={4} 
    fontSize="lg"
    fontWeight="medium"
    color="white"
    borderRadius="md"
    _hover={{
      bg: 'darkBg.700',
      color: 'brand.400',
    }}
    onClick={onClick}
  >
    {children}
  </ChakraLink>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');
  };

  const bgColor = scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.8)';
  const boxShadow = scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.05)';
  const backdropFilter = 'blur(10px)';
  const borderBottom = scrolled ? '1px solid rgba(230, 230, 230, 0.8)' : '1px solid rgba(230, 230, 230, 0.3)'

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      width="100%"
      zIndex="2000"
      transition="all 0.3s ease"
      bg={bgColor}
      boxShadow={boxShadow}
      backdropFilter={backdropFilter}
      borderBottom={borderBottom}
      py={1}
    >
      <Container maxW="container.xl">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <MotionFlex
            align="center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            mr={10}
          >
            <Link to="/">
              <Box as="img" src="/logo.svg" alt="Vizionists Logo" height={{ base: "35px", md: "45px" }} />
            </Link>
          </MotionFlex>

          <HStack spacing={10} alignItems="center">
            <HStack 
              as="nav" 
              spacing={7} 
              display={{ base: 'none', lg: 'flex' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <NavLink to="/" isActive={location.pathname === '/'}>
                {t('header.home')}
              </NavLink>
              <Menu isLazy>
                <MenuButton 
                  as={Button} 
                  variant="ghost" 
                  rightIcon={<ChevronDownIcon />}
                  fontWeight="semibold"
                  fontSize="sm"
                  letterSpacing="0.3px"
                  color={location.pathname.startsWith('/services') ? 'brand.500' : 'gray.700'}
                  _hover={{
                    color: 'brand.500',
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                >
                  {t('header.services')}
                </MenuButton>
                <MenuList bg="white" borderColor="gray.100" boxShadow="lg" p={2}>
                  <MenuItem 
                    as={Link} 
                    to="/services/ecommerce-technology" 
                    bg="white" 
                    _hover={{ bg: 'gray.50', color: 'brand.500' }} 
                    color="gray.700"
                    borderRadius="md"
                    mb={1}
                  >
                    {t('services.ecommerceTech.title')}
                  </MenuItem>
                  <MenuItem 
                    as={Link} 
                    to="/services/ecommerce-performance" 
                    bg="white" 
                    _hover={{ bg: 'gray.50', color: 'brand.500' }} 
                    color="gray.700"
                    borderRadius="md"
                    mb={1}
                  >
                    {t('services.ecommercePerformance.title')}
                  </MenuItem>
                  <MenuItem 
                    as={Link} 
                    to="/services/it-infrastructure" 
                    bg="white" 
                    _hover={{ bg: 'gray.50', color: 'brand.500' }} 
                    color="gray.700"
                    borderRadius="md"
                    mb={1}
                  >
                    {t('services.itInfrastructure.title')}
                  </MenuItem>
                  <MenuItem 
                    as={Link} 
                    to="/services/marketplace-management" 
                    bg="white" 
                    _hover={{ bg: 'gray.50', color: 'brand.500' }} 
                    color="gray.700"
                    borderRadius="md"
                  >
                    {t('services.marketplaceManagement.title')}
                  </MenuItem>
                </MenuList>
              </Menu>
              <NavLink to="/consulting" isActive={location.pathname.startsWith('/consulting')}>
                {t('header.consulting')}
              </NavLink>
              <NavLink to="/solutions" isActive={location.pathname.startsWith('/solutions')}>
                {t('header.solutions')}
              </NavLink>
              <NavLink to="/about-us" isActive={location.pathname.startsWith('/about-us')}>
                Unternehmen
              </NavLink>
              <NavLink to="/resources" isActive={location.pathname.startsWith('/resources')}>
                {t('header.resources')}
              </NavLink>
              <NavLink to="/contact" isActive={location.pathname.startsWith('/contact')}>
                {t('header.contact')}
              </NavLink>
            </HStack>
          </HStack>

          <MotionFlex 
            alignItems="center" 
            spacing={4}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              color="gray.700"
              _hover={{
                color: 'brand.500',
                bg: 'transparent',
              }}
              mr={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {i18n.language === 'de' ? 'EN' : 'DE'}
            </Button>
            
            <Button
              as={Link}
              to="/contact"
              variant="solid"
              colorScheme="brand"
              bgGradient="linear(to-r, brand.500, accent.500)"
              rightIcon={<IoRocket />}
              size={{ base: 'sm', md: 'md' }}
              display={{ base: 'none', md: 'flex' }}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'xl',
                bgGradient: "linear(to-r, brand.400, accent.400)",
              }}
            >
              Jetzt beraten lassen
            </Button>
            
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              display={{ base: 'flex', lg: 'none' }}
              onClick={onOpen}
              variant="ghost"
              color="gray.700"
              _hover={{
                bg: 'transparent',
                color: 'brand.500',
              }}
              size="lg"
            />
          </MotionFlex>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="darkBg.900">
          <DrawerCloseButton color="white" size="lg" />
          <DrawerHeader borderBottomWidth="1px" borderColor="darkBg.700">
            <Box as="img" src="/logo.svg" alt="Vizionists Logo" height="40px" />
          </DrawerHeader>

          <DrawerBody py={6}>
            <VStack spacing={2} align="stretch">
              <MobileNavItem to="/" onClick={onClose}>
                {t('header.home')}
              </MobileNavItem>
              
              <Box py={2} px={4} color="gray.400" fontWeight="medium">
                {t('header.services')}
              </Box>
              <VStack spacing={1} pl={4} align="stretch">
                <MobileNavItem to="/services/ecommerce-technology" onClick={onClose}>
                  {t('services.ecommerceTech.title')}
                </MobileNavItem>
                <MobileNavItem to="/services/ecommerce-performance" onClick={onClose}>
                  {t('services.ecommercePerformance.title')}
                </MobileNavItem>
                <MobileNavItem to="/services/it-infrastructure" onClick={onClose}>
                  {t('services.itInfrastructure.title')}
                </MobileNavItem>
                <MobileNavItem to="/services/marketplace-management" onClick={onClose}>
                  {t('services.marketplaceManagement.title')}
                </MobileNavItem>
              </VStack>
              
              <MobileNavItem to="/consulting" onClick={onClose}>
                {t('header.consulting')}
              </MobileNavItem>
              <MobileNavItem to="/solutions" onClick={onClose}>
                {t('header.solutions')}
              </MobileNavItem>
              <MobileNavItem to="/about-us" onClick={onClose}>
                {t('header.about')}
              </MobileNavItem>
              <MobileNavItem to="/resources" onClick={onClose}>
                {t('header.resources')}
              </MobileNavItem>
              <MobileNavItem to="/contact" onClick={onClose}>
                {t('header.contact')}
              </MobileNavItem>
              
              <Divider my={6} borderColor="darkBg.700" />
              
              <Flex justify="space-between" align="center">
                <Button 
                  onClick={() => {
                    toggleLanguage();
                    onClose();
                  }}
                  variant="ghost"
                  color="gray.300"
                >
                  {i18n.language === 'de' ? 'English' : 'Deutsch'}
                </Button>
                
                <Button
                  as={Link}
                  to="/contact"
                  variant="solid"
                  rightIcon={<IoRocket />}
                  onClick={onClose}
                >
                  {t('header.letsTalk')}
                </Button>
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;