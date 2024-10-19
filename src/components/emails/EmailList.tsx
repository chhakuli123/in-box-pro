'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEmail } from '@/context/EmailContext';
import { EmailListProps } from '@/interface/email';
import { formatDate } from '@/utils/formatDate';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EmailList: React.FC<EmailListProps> = ({
  initialEmails,
  totalEmails,
  currentPage,
  filter,
}) => {
  const { favorites, readEmails, markAsRead } = useEmail();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentId = pathname.split('/').pop();
  const totalPages = Math.ceil(totalEmails / 10);

  if (!initialEmails) {
    return <div>Loading...</div>;
  }

  const filteredEmails = initialEmails.filter((email) => {
    switch (filter) {
      case 'unread':
        return !readEmails.includes(email.id);
      case 'read':
        return readEmails.includes(email.id);
      case 'favorite':
        return favorites.includes(email.id);
      default:
        return true;
    }
  });

  const handleEmailClick = (id: string) => {
    markAsRead(id);
    const currentParams = new URLSearchParams(searchParams.toString());
    const emailUrl = `/${id}?${currentParams.toString()}`;
    router.push(emailUrl);
  };

  const handlePageChange = (newPage: number) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('page', newPage.toString());
    if (filter && filter !== 'all') {
      currentParams.set('filter', filter);
    }
    const newUrl = `${pathname}?${currentParams.toString()}`;
    router.push(newUrl);
  };

  if (filteredEmails.length === 0) {
    return (
      <div className="mt-12 text-center text-lg text-text">
        No emails found.
      </div>
    );
  }

  return (
    <section className="mx-auto">
      <nav className="mb-4 flex justify-end">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="rounded bg-gray-200 p-2 text-gray-700 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="rounded bg-gray-200 p-2 text-gray-700 disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </nav>

      <ul className="h-[calc(100vh-20vh)] space-y-4 overflow-y-auto">
        {filteredEmails.map((email) => (
          <li key={email.id}>
            <div
              className={`flex cursor-pointer gap-4 rounded-lg border   ${
                email.id === currentId
                  ? 'border-2 border-accent'
                  : 'border-border'
              } bg-white px-6 py-3 hover:bg-gray-100`}
              onClick={() => handleEmailClick(email.id)}
            >
              <aside className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
                {email.from.name.charAt(0).toUpperCase()}
              </aside>
              <article className="flex w-full flex-col">
                <header className="flex items-center justify-between text-sm font-semibold text-text">
                  <span>
                    <span className="font-normal">From: </span>
                    {email.from.email}
                  </span>
                </header>
                <h3 className="text-sm font-semibold text-text">
                  <span className="font-normal">Subject: </span>
                  {email.subject}
                </h3>
                <p className="mt-2 text-sm text-text">
                  {email.short_description}
                </p>
                <footer className="mt-2 text-sm text-text">
                  {formatDate(email.date)}
                  {favorites.includes(email.id) && (
                    <span className="ml-8 text-sm font-semibold text-accent">
                      Favorite
                    </span>
                  )}
                  {!readEmails.includes(email.id) && (
                    <span className="ml-8 text-sm font-semibold text-blue-500">
                      Unread
                    </span>
                  )}
                </footer>
              </article>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { EmailList };
