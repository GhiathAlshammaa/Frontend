export { User, Recruiter, Employee } from '@app/models/backend/user';

// Request Models

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}
