export interface EmailsResponse {
  list: Array<{
    id: string;
    from: {
      email: string;
      name: string;
    };
    date: number;
    subject: string;
    short_description: string;
  }>;
  total: number;
}

interface Email {
  id: string;
  from: {
    email: string;
    name: string;
  };
  date: number;
  subject: string;
  short_description: string;
}

export interface EmailListProps {
  initialEmails: Email[] | null;
  totalEmails: number;
  currentPage: number;
  filter?: string;
}

export interface EmailDetailsProps {
  emails: Email[];
  emailBody: { id: string; body: string };
}
