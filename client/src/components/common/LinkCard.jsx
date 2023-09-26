import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function LinkCard({ to, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    transition: "0.3s",
  };

  const linkHoverStyle = {
    backgroundColor: "#d2f7d5",
  };

  return (
    <Link
      to={to}
      style={isHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mb-3 card w-100"
    >
      {children}
    </Link>
  );
}

LinkCard.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
