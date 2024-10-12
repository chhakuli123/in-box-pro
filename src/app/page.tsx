import { EmailList } from '@/components';
import { fetchEmails } from '@/services';

const page = async () => {
  const getAllEmails = await fetchEmails();

  return (
    <div className="bg-background px-12 py-20">
      <EmailList emails={getAllEmails} />
    </div>
  );
};

export default page;
