interface User {
  id: number;
  name: string;
  email: string;
}
interface AuthState {
  isLogin: boolean;
  pending: boolean;
  error: any;
  user: User | null;
  token: string | null;
}

export type {AuthState};
