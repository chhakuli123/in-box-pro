'use client';

import React from 'react';
import { useEmail } from '@/context/EmailContext';
import { EmailDetailsProps } from '@/interface/email';
import { formatDate } from '@/utils/formatDate';

const EmailDetails: React.FC<EmailDetailsProps> = ({ emails, emailBody }) => {
  const matchedEmail = emails.find((email) => email.id === emailBody.id);
  const { favorites, readEmails, toggleFavorite, markAsUnread } = useEmail();

  if (!matchedEmail) {
    return (
      <p className="mt-12 text-center text-lg text-gray-500">
        No email details available for the selected message.
      </p>
    );
  }

  const handleToggleFavorite = () => toggleFavorite(matchedEmail.id);
  const handleMarkAsUnread = () => markAsUnread(matchedEmail.id);

  const isFavorite = favorites.includes(emailBody.id);
  const isRead = readEmails.includes(emailBody.id);

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
            <div className="flex gap-2">
              <button
                onClick={handleToggleFavorite}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  isFavorite
                    ? 'bg-yellow-400 text-gray-800'
                    : 'bg-accent text-white'
                }`}
              >
                {isFavorite ? 'Remove from favorites' : 'Mark as favorite'}
              </button>
              {isRead && (
                <button
                  onClick={handleMarkAsUnread}
                  className="rounded-full bg-blue-500 px-3 py-1.5 text-sm text-white"
                >
                  Mark as unread
                </button>
              )}
            </div>
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
