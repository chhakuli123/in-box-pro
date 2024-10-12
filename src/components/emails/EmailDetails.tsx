import React from 'react';
import { Emails } from '@/interface/email';
import { formatDate } from '@/utils/formatDate';

interface EmailBody {
  id: string;
  body: string;
}

const EmailDetails: React.FC<{ emails: Emails; emailBody: EmailBody }> = ({
  emails,
  emailBody,
}) => {
  const matchedEmail = emails.list.find((email) => email.id === emailBody.id);

  // If no email matches, return null or an alternative UI like a message
  if (!matchedEmail) {
    return (
      <p className="text-center text-sm text-gray-500">
        No email details available for the selected message.
      </p>
    );
  }

  return (
    <div className="mx-auto">
      <div className="mb-8 flex gap-4">
        <aside className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl font-semibold text-white">
          {matchedEmail.from.name.charAt(0).toUpperCase()}
        </aside>
        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-text">
              {matchedEmail.subject}
            </h2>
            <button className="rounded-full bg-accent px-3 py-1.5 text-sm text-white">
              Mark as favorite
            </button>
          </div>
          <footer className="mt-6 text-sm text-text">
            {formatDate(matchedEmail.date)}
          </footer>
        </div>
      </div>

      <div
        className="px-16 text-text [&_p]:mb-4"
        dangerouslySetInnerHTML={{ __html: emailBody.body }}
      />
    </div>
  );
};

export default EmailDetails;
