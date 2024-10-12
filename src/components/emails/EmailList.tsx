'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Emails } from '@/interface/email';
import { formatDate } from '@/utils/formatDate';

const EmailList = ({ emails }: { emails: Emails }) => {
  const pathname = usePathname();
  const currentId = pathname.split('/').pop();

  return (
    <section className="mx-auto">
      <ul className="space-y-6">
        {emails.list.map((email) => (
          <Link
            className={`flex gap-4 rounded-lg border ${
              email.id === currentId
                ? 'border-2 border-accent'
                : 'border-gray-300'
            } bg-white px-6 py-3 hover:bg-gray-100`}
            key={email.id}
            href={`/${email.id}`}
          >
            {/* Avatar */}
            <aside className="flex h-12 w-14 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
              {email.from.name.charAt(0).toUpperCase()}
            </aside>
            {/* Email Details */}
            <article className="flex w-full flex-col">
              <header className="text-sm font-semibold text-text">
                <span className="font-normal">From: </span>
                {email.from.email}
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
              </footer>
            </article>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export { EmailList };
