import { User } from '@/types/user';

// 1. Create a big list of fake data so we have something to filter
const FAKE_USERS: User[] = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`, // Creates "User 1", "User 2", etc.
}));

export type GetUsersFilters = {
  limit: number;
  page: number;
};

export async function getUsers(filters?: GetUsersFilters) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 2. Set default values if filters are missing
  const page = filters?.page || 1;
  const limit = filters?.limit || 10;

  // 3. Do the math to find which users to show
  const start = (page - 1) * limit; 
  const end = start + limit;

  // 4. Return only the slice of users requested
  return FAKE_USERS.slice(start, end);
}