import { lazy } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const Consulting = lazy(() => import('../pages/Consulting'));
const Solutions = lazy(() => import('../pages/Solutions'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Resources = lazy(() => import('../pages/Resources'));
const Contact = lazy(() => import('../pages/Contact'));

const routes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/services',
    element: Services,
  },
  {
    path: '/consulting',
    element: Consulting,
  },
  {
    path: '/solutions',
    element: Solutions,
  },
  {
    path: '/about-us',
    element: AboutUs,
  },
  {
    path: '/resources',
    element: Resources,
  },
  {
    path: '/contact',
    element: Contact,
  },
];

export default routes;