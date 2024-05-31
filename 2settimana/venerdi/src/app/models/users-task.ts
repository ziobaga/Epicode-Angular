import { iTodo } from './todo';

export interface iUsersTask {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  todo1: iTodo[];
}
