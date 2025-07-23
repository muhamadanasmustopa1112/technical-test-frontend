const BASE_URL = 'https://0f26ab2a-8d7f-493c-9f52-06d600836d8b-00-swlivmvhvxk7.pike.replit.dev';

export interface Customer {
  '': number;
  Number: number;
  'Name of Location': number;
  Date: string;
  'Login Hour': string;
  Name: string;
  Age: string;
  gender: number;
  Email: string;
  'No Telp': string;
  'Brand Device': string;
  'Digital Interest': string;
  'Location Type': string;
}

export interface GenderStats {
  _id: string;
  count: number;
}

export const fetchCustomers = async (page = 1, limit = 10): Promise<Customer[]> => {
  try {
    const res = await fetch(`${BASE_URL}/api/data?page=${page}&limit=${limit}`, {
      next: { revalidate: 30 }, 
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Failed to fetch customers:', err);
    return [];
  }
};

export const fetchGenderStats = async (): Promise<GenderStats[]> => {
  try {
    const res = await fetch(`${BASE_URL}/api/data/gender-stats`);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Failed to fetch gender stats:', err);
    return [];
  }
};
