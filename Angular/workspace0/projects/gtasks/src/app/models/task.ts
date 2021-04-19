export interface Task {
  id: string;
  title: string;
  parent: string;
  notes: string;
  status: string;
  updated?: string;
  position?: string;
  completed?: string;
  deleted?: boolean;
  hidden?: boolean;
}
