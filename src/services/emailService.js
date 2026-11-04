import emailjs from '@emailjs/browser';

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data to send
 * @param {String} type - 'business' (default) or 'customer'
 * @returns {Promise} - EmailJS response
 */
export const sendEmail = async (formData, type = 'business') => {
  try {
    // Log for debugging
    console.log('Sending email with data:', formData);
    
    // Choose template based on type
    const templateId = type === 'customer' ? EMAILJS_CUSTOMER_TEMPLATE_ID : EMAILJS_TEMPLATE_ID;
    
    // Skip customer email if template ID not configured
    if (type === 'customer' && !EMAILJS_CUSTOMER_TEMPLATE_ID) {
      console.log('Customer template not configured, skipping customer email');
      return { success: true, skipped: true };
    }
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      formData,
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    console.error('Error details:', error.text || error.message);
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
