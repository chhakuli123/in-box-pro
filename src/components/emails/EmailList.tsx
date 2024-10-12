'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFavorites } from '@/context/favoritesContext';
import { Emails } from '@/interface/email';
import { formatDate } from '@/utils/formatDate';

interface EmailListProps {
  emails: Emails;
}

const EmailList: React.FC<EmailListProps> = ({ emails }) => {
  const { favorites } = useFavorites();
  const pathname = usePathname();
  const currentId = pathname.split('/').pop();

  return (
    <section className="mx-auto">
      <ul className="space-y-4">
        {emails.list.map((email) => (
          <Link
            className={`flex gap-4 rounded-lg border ${
              email.id === currentId ? 'border-accent' : 'border-gray-300'
            } bg-white px-6 py-3 hover:bg-gray-100`}
            key={email.id}
            href={`/${email.id}`}
          >
            {/* Avatar */}
            <aside className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
              {email.from.name.charAt(0).toUpperCase()}
            </aside>
            {/* Email Details */}
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
              </footer>
            </article>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export { EmailList };
