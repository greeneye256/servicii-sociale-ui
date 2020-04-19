export class UserRole {
  static readonly ROLE_ADMIN = new UserRole(1, 'ROLE_ADMIN');
  static readonly ROLE_WRITE = new UserRole(2, 'ROLE_WRITE');
  static readonly ROLE_USER = new UserRole(3, 'ROLE_USER');


  private constructor(public readonly id: number, public readonly name: string) {
  }
}
