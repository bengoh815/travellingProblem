import { ReactNode, useEffect } from "react";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const RedirectDashboard: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return <div>{children}</div>;
};

export default RedirectDashboard;
