export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

export default function Profile() {
  return <div>This is profile page </div>;
}
