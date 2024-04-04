import React, { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

const ProtectedComponent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return <div>{children}</div>;
};

export default ProtectedComponent;
