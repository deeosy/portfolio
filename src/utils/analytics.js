import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
};

export const trackPage = (page) => {
    ReactGA.send({ 
        hitType: 'pageview', 
        page
    });
};

export const trackEvent = (category, action, label, value) => {
    ReactGA.event({
        category,
        action,
        label,
        value
    });
};