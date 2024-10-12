import { get } from '../httpService';

const fetchEmails = () => get('flipkart-email-mock.now.sh/');

const fetchEmailDetails = (id: number) =>
  get(`flipkart-email-mock.now.sh/?id=${id}`);

export { fetchEmails, fetchEmailDetails };
