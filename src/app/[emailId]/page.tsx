import { EmailList } from '@/components';
import { fetchEmailDetails, fetchEmails } from '@/services/api/emailServices';

import EmailDetails from '@/components/emails/EmailDetails';

interface PageProps {
  searchParams: { page?: string; filter?: string };
  params: { emailId: number };
}

const page = async ({ params, searchParams }: PageProps) => {
  const currentPage = parseInt(searchParams.page || '1', 10);

  const { list: emails, total } = await fetchEmails(currentPage);

  const emailDetails = await fetchEmailDetails(params.emailId);
  return (
    <div className="flex flex-col bg-background px-12 md:flex-row ">
      <div className="mr-6 w-full md:w-1/2">
        <EmailList
          initialEmails={emails}
          totalEmails={total}
          currentPage={currentPage}
        />
      </div>
      <div className="mx-2 mb-6 h-[calc(100vh-14vh)]  w-full overflow-y-auto rounded-lg border border-border bg-white p-8">
        <EmailDetails emails={emails} emailBody={emailDetails} />
      </div>
    </div>
  );
};

export default page;
