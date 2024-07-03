export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password?: string;
  enable: number;
  imageProfile: string;
  createdAt: string;
  updatedAt: string;
  roleId?: number;
  roleName: string;
}
