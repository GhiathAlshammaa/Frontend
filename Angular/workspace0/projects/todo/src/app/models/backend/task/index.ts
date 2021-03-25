import { firestore } from 'firebase/app';

export interface Task {
  title: string;
  description: string;
  created: firestore.FieldValue;
  updated?: firestore.FieldValue;
}
