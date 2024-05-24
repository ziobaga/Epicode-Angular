import { iPosts } from './posts';

export interface JsonContent {
  posts: iPosts[];
  total: number;
  skip: number;
  limit: number;
}
