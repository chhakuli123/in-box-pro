'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface EmailContextType {
  favorites: string[];
  readEmails: string[];
  toggleFavorite: (id: string) => void;
  markAsRead: (id: string) => void;
  markAsUnread: (id: string) => void;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [readEmails, setReadEmails] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteEmails');
    const storedReadEmails = localStorage.getItem('readEmails');

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    if (storedReadEmails) {
      setReadEmails(JSON.parse(storedReadEmails));
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.includes(id)
        ? prev.filter((emailId) => emailId !== id)
        : [...prev, id];
      localStorage.setItem('favoriteEmails', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const markAsRead = (id: string) => {
    setReadEmails((prev) => {
      if (!prev.includes(id)) {
        const updatedReadEmails = [...prev, id];
        localStorage.setItem('readEmails', JSON.stringify(updatedReadEmails));
        return updatedReadEmails;
      }
      return prev;
    });
  };

  const markAsUnread = (id: string) => {
    setReadEmails((prev) => {
      const updatedReadEmails = prev.filter((emailId) => emailId !== id);
      localStorage.setItem('readEmails', JSON.stringify(updatedReadEmails));
      return updatedReadEmails;
    });
  };

  return (
    <EmailContext.Provider
      value={{
        favorites,
        readEmails,
        toggleFavorite,
        markAsRead,
        markAsUnread,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};
