import { get } from '../httpService';

export const fetchEmails = () => get('flipkart-email-mock.now.sh/');
