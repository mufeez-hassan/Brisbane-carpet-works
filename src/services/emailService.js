import emailjs from '@emailjs/browser';

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data to send
 * @returns {Promise} - EmailJS response
 */
export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formData,
      EMAILJS_PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

/**
 * Send email using form reference (alternative method)
 * @param {HTMLFormElement} form - Form element
 * @returns {Promise} - EmailJS response
 */
export const sendEmailFromForm = async (form) => {
  try {
    const response = await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form,
      EMAILJS_PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

// Initialize EmailJS (optional)
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};
