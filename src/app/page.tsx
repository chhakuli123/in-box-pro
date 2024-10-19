import { Suspense } from 'react';
import { EmailList } from '@/components';
import { fetchEmails } from '@/services';

interface PageProps {
  searchParams: { page?: string; filter?: string };
}

export default async function page({ searchParams }: PageProps) {
  const currentPage = parseInt(searchParams.page || '1', 10);
  const filter = searchParams.filter || 'all';

  const { list: emails, total } = await fetchEmails(currentPage);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="px-12">
        <EmailList
          initialEmails={emails}
          totalEmails={total}
          currentPage={currentPage}
          filter={filter}
        />
      </div>
    </Suspense>
  );
}
