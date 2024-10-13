import { EmailsResponse } from '@/interface/email';

import { get } from '../httpService';

const fetchEmails = (page: number = 1): Promise<EmailsResponse> =>
  get(`flipkart-email-mock.now.sh/?page=${page}`);

const fetchEmailDetails = (id: number) =>
  get(`flipkart-email-mock.now.sh/?id=${id}`);

export { fetchEmails, fetchEmailDetails };
