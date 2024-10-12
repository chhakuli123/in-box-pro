// Function to format the date
export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  // Format the date part as MM/DD/YYYY
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(date);

  // Format the time part as hh:mm am/pm
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);

  return `${formattedDate} ${formattedTime}`;
};
