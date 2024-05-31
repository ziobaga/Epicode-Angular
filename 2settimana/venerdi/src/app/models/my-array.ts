import { iUsers } from './users';

export interface iMyArray {
  user?: iUsers;
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
