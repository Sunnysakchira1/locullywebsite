import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-WWEGN16SKP', {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  });
};

// Track page views
export const logPageView = () => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: window.location.pathname + window.location.search 
  });
};

// Track custom events
export const logEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
};

// Track form submissions
export const logFormSubmission = (formName, success = true) => {
  ReactGA.event({
    category: 'Form',
    action: 'Submit',
    label: formName,
    value: success ? 1 : 0
  });
};

// Track conversion events
export const logConversion = (conversionType, value = 1) => {
  ReactGA.event({
    category: 'Conversion',
    action: conversionType,
    value
  });
};