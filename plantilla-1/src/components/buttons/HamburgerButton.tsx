import React from "react";
import "./styles/hamburgerStyles.css";

interface EventProps {
  event: () => void;
  isOpen: boolean
}

const HamburgerButton: React.FC<EventProps> = ({
  event,
  isOpen
}) => {
  return (
    <div className="lg:hidden">
      <label className="burger">
        <input type="checkbox" id="burger" onChange={event} checked={isOpen ? true : false} />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default HamburgerButton;
