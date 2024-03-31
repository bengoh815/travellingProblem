import { createContext, useState, useContext, ReactNode } from "react";
import { IUser } from "../models/user.types";

interface UserContextType {
  user: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (userData: IUser) => {
    setUser(userData);
    // Additional login logic like saving token, etc.
  };

  const logout = () => {
    setUser(null);
    // Additional logout logic like clearing token, etc.
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
