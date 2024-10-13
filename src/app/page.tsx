import { Suspense } from 'react';
import { EmailList } from '@/components';
import { fetchEmails } from '@/services';

interface PageProps {
  searchParams: { page?: string; filter?: string };
}

export default async function Page({ searchParams }: PageProps) {
  const currentPage = parseInt(searchParams.page || '1', 10);
  const filter = searchParams.filter || 'all';

  const { list: emails, total } = await fetchEmails(currentPage);

  return (
    <div className="px-12">
      <Suspense fallback={<div>Loading...</div>}>
        <EmailList
          initialEmails={emails}
          totalEmails={total}
          currentPage={currentPage}
          filter={filter}
        />
      </Suspense>
    </div>
  );
}
