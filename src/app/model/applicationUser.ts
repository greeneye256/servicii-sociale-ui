import {UserRole} from './userRole';


export class ApplicationUser {
  id: number;
  username: string;
  password: string;
  roles: UserRole[];
  token?: string;
}
