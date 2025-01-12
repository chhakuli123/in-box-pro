# 📧 InBoxPro - Email Client Moonshot Assignment

This project is a simple email client app designed to manage and view emails using provided APIs. The app allows users to view email lists, read email details, mark emails as favorites, and filter emails based on various criteria.

## Features

- **Email List View**: Displays a list of emails with sender, subject, short description, and date/time.
- **Split Screen View**: Clicking on an email shows its details in a split view format:
  - Left side: Email list
  - Right side: Email body
- **Mark as Favorite**: Mark any email as a favorite directly in the email detail view.
- **Read/Unread Styles**: Different CSS styles distinguish read and unread emails.
- **Filter Options**: Filter emails by:
  - Favorites
  - Read
  - Unread
- **Date Format**: Dates are shown in `dd/MM/yyyy hh:mm a` format.
- **Pagination**: Handles long email lists using pagination.

## 🛠 Tech Stack

- **Next.js**: React framework for server-side rendering and routing.
- **TypeScript**: For type-safe development.
- **Tailwind CSS**: For styling the components.
- **ESLint, Prettier, and Husky**: For code linting, formatting, and pre-commit hooks.
- **Local Storage**: To persist favorite and read statuses.
- **Fetch API**: For API calls.

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/inboxpro-assignment.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Visit http://localhost:3000 to view the app.

## 📋 API Information

1. Emails List API:

```
GET https://flipkart-email-mock.now.sh/
```

2. Paginated Emails API:

```
GET https://flipkart-email-mock.now.sh/?page=<pageNumber>
```

3. Email Body API:

```bash
GET https://flipkart-email-mock.now.sh/?id=<email-item-id>
```
