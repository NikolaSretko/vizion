import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Icon, Flex, Text } from '@chakra-ui/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  // Wir brauchen keinen zweiten Button-Status mehr
  // const [showDownButton, setShowDownButton] = useState(true);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Wir brauchen keine Scroll-Down-Funktion mehr

  return (
    <>
      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <MotionBox
            position="fixed"
            bottom="6rem"
            right="2rem"
            zIndex={90}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            cursor="pointer"
            bg="white"
            color="brand.500"
            p={3}
            borderRadius="full"
            boxShadow="lg"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "xl",
              color: "accent.500"
            }}
            _active={{
              transform: "translateY(0)",
            }}
          >
            <Icon as={FaArrowUp} boxSize={5} />
          </MotionBox>
        )}
      </AnimatePresence>

      {/* Scroll to top button (additional on the left side) */}
      <AnimatePresence>
        {isVisible && (
          <MotionBox
            position="fixed"
            bottom="6rem"
            left="2rem"
            zIndex={90}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            cursor="pointer"
            onClick={scrollToTop}
          >
            <Flex
              direction="column"
              align="center"
              gap={2}
            >
              <Text 
                color="gray.600" 
                fontWeight="medium"
                fontSize="sm"
                transform="rotate(-90deg)"
                mb={5}
              >
                Nach oben
              </Text>
              <Box
                bg="white"
                color="brand.500"
                p={3}
                borderRadius="full"
                boxShadow="lg"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                  color: "accent.500"
                }}
              >
                <Icon as={FaArrowUp} boxSize={5} />
              </Box>
            </Flex>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;