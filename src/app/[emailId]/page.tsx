import { EmailList } from '@/components';
import { fetchEmailDetails, fetchEmails } from '@/services/api/emailServices';

import EmailDetails from '@/components/emails/EmailDetails';

const page = async ({ params }: { params: { emailId: number } }) => {
  const emailDetails = await fetchEmailDetails(params.emailId);
  const emails = await fetchEmails();

  return (
    <div className="flex h-screen flex-col bg-background px-12 pt-8 md:flex-row ">
      <div className="mr-6 mt-14 w-full overflow-y-auto pb-4 md:w-1/2">
        <EmailList emails={emails} />
      </div>
      <div className="mx-2 mb-6 mt-14 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white p-8">
        <EmailDetails emails={emails} emailBody={emailDetails} />
      </div>
    </div>
  );
};

export default page;
