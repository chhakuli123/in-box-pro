'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const TopBar: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const filter = searchParams.get('filter') || 'all';

  const filterOptions = [
    { label: 'All Mails', value: 'all' },
    { label: 'Unread', value: 'unread' },
    { label: 'Read', value: 'read' },
    { label: 'Favorite', value: 'favorite' },
  ];

  // Check if we're on the main page or an email detail page
  const isMainOrDetailPage = pathname === '/' || /^\/[^/]+$/.test(pathname);

  return (
    <div className="flex items-center gap-4 bg-background px-12 pb-8 pt-6">
      <span className="text-lg font-medium text-text">Filter by:</span>
      <div className="flex gap-3">
        {filterOptions.map((option) => {
          const isActive =
            (option.value === 'all' &&
              isMainOrDetailPage &&
              filter === 'all') ||
            (option.value === filter && pathname === '/');

          return (
            <Link
              key={option.value}
              href={
                option.value === 'all' && isMainOrDetailPage
                  ? '/'
                  : `/?filter=${option.value}`
              }
              className={`rounded-full px-4 py-2 text-text ${
                isActive ? 'border border-border bg-filter-button' : ''
              }`}
            >
              {option.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { TopBar };
