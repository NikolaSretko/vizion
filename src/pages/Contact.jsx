import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  SimpleGrid,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdWhatsapp } from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const MotionBox = motion(Box);

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <Box py={10}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title={t('contact.title')}
          subtitle="Wir freuen uns auf Ihre Anfrage und beraten Sie gerne zu Ihrem E-Commerce Projekt."
          mb={16}
        />
      </MotionBox>

      <Container maxW="container.xl" px={{ base: 5, sm: 10 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <VStack spacing={5} align="flex-start">
              <Heading fontSize="2xl" fontWeight="bold">
                Kontaktieren Sie uns
              </Heading>
              <Text color="gray.600" fontSize="lg">
                Füllen Sie das Formular aus oder nutzen Sie einen unserer direkten Kontaktwege.
              </Text>

              <VStack spacing={5} width="100%" as="form">
                <FormControl id="name">
                  <FormLabel>{t('contact.form.name')}</FormLabel>
                  <Input type="text" placeholder="Max Mustermann" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>{t('contact.form.email')}</FormLabel>
                  <Input type="email" placeholder="max@musterfirma.de" />
                </FormControl>
                <FormControl id="phone">
                  <FormLabel>{t('contact.form.phone')}</FormLabel>
                  <Input type="tel" placeholder="+49 123 456789" />
                </FormControl>
                <FormControl id="company">
                  <FormLabel>{t('contact.form.company')}</FormLabel>
                  <Input type="text" placeholder="Muster GmbH" />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>{t('contact.form.message')}</FormLabel>
                  <Textarea placeholder="Ihre Nachricht an uns..." rows={5} />
                </FormControl>
                <Button
                  colorScheme="brand"
                  size="lg"
                  width="full"
                  type="submit"
                  mt={4}
                >
                  {t('contact.form.submit')}
                </Button>
              </VStack>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <VStack
              spacing={8}
              align="flex-start"
              bg={useColorModeValue('gray.50', 'gray.700')}
              p={8}
              borderRadius="lg"
              height="100%"
            >
              <Heading fontSize="2xl" fontWeight="bold">
                Unsere Kontaktdaten
              </Heading>

              <VStack spacing={6} width="100%" align="flex-start">
                <HStack spacing={4}>
                  <IconButton
                    aria-label="phone"
                    variant="outline"
                    colorScheme="brand"
                    icon={<MdPhone fontSize="20px" />}
                  />
                  <VStack spacing={0} align="flex-start">
                    <Text fontWeight="medium">Telefon</Text>
                    <Text>+49 (0) 89 1234567</Text>
                  </VStack>
                </HStack>

                <HStack spacing={4}>
                  <IconButton
                    aria-label="email"
                    variant="outline"
                    colorScheme="brand"
                    icon={<MdEmail fontSize="20px" />}
                  />
                  <VStack spacing={0} align="flex-start">
                    <Text fontWeight="medium">E-Mail</Text>
                    <Text>info@vizio-commerce.com</Text>
                  </VStack>
                </HStack>

                <HStack spacing={4}>
                  <IconButton
                    aria-label="location"
                    variant="outline"
                    colorScheme="brand"
                    icon={<MdLocationOn fontSize="20px" />}
                  />
                  <VStack spacing={0} align="flex-start">
                    <Text fontWeight="medium">Adresse</Text>
                    <Text>Musterstraße 123, 80331 München</Text>
                  </VStack>
                </HStack>

                <HStack spacing={4}>
                  <IconButton
                    aria-label="whatsapp"
                    variant="outline"
                    colorScheme="brand"
                    icon={<MdWhatsapp fontSize="20px" />}
                  />
                  <VStack spacing={0} align="flex-start">
                    <Text fontWeight="medium">WhatsApp</Text>
                    <Text>+49 (0) 172 1234567</Text>
                  </VStack>
                </HStack>
              </VStack>

              <Box width="100%" py={6}>
                <Text fontWeight="medium" mb={4}>
                  Folgen Sie uns
                </Text>
                <HStack spacing={4}>
                  <IconButton
                    aria-label="linkedin"
                    icon={<FaLinkedin />}
                    colorScheme="linkedin"
                    variant="solid"
                  />
                  <IconButton
                    aria-label="twitter"
                    icon={<FaTwitter />}
                    colorScheme="twitter"
                    variant="solid"
                  />
                  <IconButton
                    aria-label="facebook"
                    icon={<FaFacebook />}
                    colorScheme="facebook"
                    variant="solid"
                  />
                  <IconButton
                    aria-label="instagram"
                    icon={<FaInstagram />}
                    bg="#E1306C"
                    color="white"
                    _hover={{
                      bg: "#c13584",
                    }}
                  />
                </HStack>
              </Box>

              <Button
                as="a"
                href="https://calendly.com/example"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MdPhone />}
                colorScheme="brand"
                variant="outline"
                size="lg"
                width="full"
              >
                {t('contact.bookCall')}
              </Button>
            </VStack>
          </MotionBox>
        </SimpleGrid>

        <MotionBox
          mt={16}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Box
            width="100%"
            height="400px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            bg="gray.200"
            position="relative"
          >
            {/* Google Maps would go here */}
            <Flex
              align="center"
              justify="center"
              height="100%"
              width="100%"
              bg="gray.100"
            >
              <Text fontSize="xl" fontWeight="medium" color="gray.500">
                Google Maps Karte
              </Text>
            </Flex>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Contact;