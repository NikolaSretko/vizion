import { Box, Heading, Text, Container, Flex, Badge, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const SectionHeader = ({ title, subtitle, badge, centered = true, gradient = false, ...rest }) => {
  return (
    <Container maxW="container.xl" {...rest}>
      <MotionBox
        textAlign={centered ? 'center' : 'left'}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        position="relative"
      >
        {/* Optional badge */}
        {badge && (
          <Flex justify={centered ? 'center' : 'flex-start'} mb={3}>
            <Badge 
              colorScheme="accent" 
              px={3} 
              py={1} 
              borderRadius="full" 
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="wide"
            >
              {badge}
            </Badge>
          </Flex>
        )}
        
        {/* Title with optional gradient */}
        <MotionHeading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          bgGradient={gradient ? "linear(to-r, brand.500, accent.500)" : undefined}
          bgClip={gradient ? "text" : undefined}
          color={gradient ? undefined : useColorModeValue('gray.800', 'white')}
          mb={4}
          letterSpacing="tight"
          lineHeight="1.2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </MotionHeading>
        
        {/* Optional subtitle */}
        {subtitle && (
          <MotionText
            color={useColorModeValue('gray.600', 'gray.300')}
            fontSize={{ base: "lg", md: "xl" }}
            maxW={centered ? '780px' : 'full'}
            mx={centered ? 'auto' : 0}
            lineHeight="1.7"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </MotionText>
        )}
        
        {/* Background decorative element */}
        {gradient && (
          <Box
            position="absolute"
            width="30%"
            height="20px"
            bottom="-5px"
            left={centered ? '35%' : '0'}
            bg="accent.500"
            opacity={0.1}
            zIndex={-1}
          />
        )}
      </MotionBox>
    </Container>
  );
};

export default SectionHeader;