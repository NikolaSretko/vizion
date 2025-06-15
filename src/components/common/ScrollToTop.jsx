import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
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

  return (
    <>
      {/* For desktop: Right side scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <MotionBox
            display={{ base: 'none', md: 'block' }}
            position="fixed"
            bottom="5rem"
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

      {/* For mobile: Fixed to bottom scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <MotionBox
            display={{ base: 'block', md: 'none' }}
            position="fixed"
            bottom="2rem"
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
            p={2.5}
            borderRadius="full"
            boxShadow="lg"
            _hover={{
              boxShadow: "xl",
              color: "accent.500"
            }}
          >
            <Icon as={FaArrowUp} boxSize={4} />
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;