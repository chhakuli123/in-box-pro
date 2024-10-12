import { Emails } from '@/interface/email';
import { formatDate } from '@/utils/formatDate';

const EmailList = ({ emails }: { emails: Emails }) => {
  return (
    <section className="mx-auto bg-background p-8">
      <header>
        <h2 className="mb-4 text-2xl font-bold text-black">
          Email List: {emails.total}
        </h2>
      </header>
      <ul className="space-y-4">
        {emails.list.map((email) => (
          <li
            key={email.id}
            className="flex gap-4 rounded-lg border border-gray-300 bg-white px-6 py-3 hover:bg-gray-100"
          >
            {/* Avatar */}
            <aside className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
              {email.from.name.charAt(0).toUpperCase()}
            </aside>

            {/* Email Details */}
            <article className="flex flex-col">
              <header className="text-sm font-semibold text-text">
                <span className="font-normal">From: </span>
                {email.from.email}
              </header>
              <h3 className="text-sm font-semibold text-text">
                <span className="font-normal">Subject: </span> {email.subject}
              </h3>
              <p className="mt-2 text-sm  text-text">
                {email.short_description}
              </p>
              <footer className="mt-2 text-sm text-text">
                {formatDate(email.date)}
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { EmailList };
