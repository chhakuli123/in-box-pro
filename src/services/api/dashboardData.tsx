import { DataEntry } from '@/interface/dashboard';
import { dataset } from 'mockData';

// Function to fetch the mock dashboard data
export const fetchMockDashboardData = (): Promise<DataEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataset);
    }, 1000); // Simulate a 1-second delay
  });
};
