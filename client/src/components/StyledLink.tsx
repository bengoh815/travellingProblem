import React from "react";
import { Typography, TypographyProps } from "@mui/material";
import { Link } from "react-router-dom";

interface StyledLinkProps extends TypographyProps {
  to: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  children,
  to,
  variant,
  color,
}) => {
  return (
    <Typography
      variant={variant ? variant : "h6"}
      component={Link}
      to={to}
      color={color ? color : "primary"}
      sx={{
        textDecoration: "none",
      }}
    >
      {children}
    </Typography>
  );
};

export default StyledLink;
