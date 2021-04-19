import { DayKind } from '.';

export interface TaskList {
  id: number;
  title: string;
  etag?: string;
  selfLink?: string;
  updated: string;
  kind?: DayKind;
}

// {
//   "kind": string,
//   "id": string,
//   "etag": string,
//   "title": string,
//   "updated": string,
//   "selfLink": string
// }
