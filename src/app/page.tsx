import { EmailList } from '@/components';
import { fetchEmails } from '@/services';

const page = async () => {
  const getAllEmails = await fetchEmails();

  return <EmailList emails={getAllEmails} />;
};

export default page;
