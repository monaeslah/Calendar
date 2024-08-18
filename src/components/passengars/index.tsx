import React, { useState } from "react";
import Button from "../testComp/Button";

interface PassengerCounterProps {
  onPassengerChange: (adults: number, children: number) => void; // Callback to parent
}

const PassengerCounterDropdown: React.FC<PassengerCounterProps> = ({
  onPassengerChange,
}) => {
  const [adults, setAdults] = useState<number>(0); // Start with 0 adults
  const [children, setChildren] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddAdult = () => {
    const newAdults = adults + 1;
    setAdults(newAdults);
    onPassengerChange(newAdults, children);
  };

  const handleRemoveAdult = () => {
    if (adults > 0) {
      const newAdults = adults - 1;
      setAdults(newAdults);
      onPassengerChange(newAdults, children);

      if (newAdults === 0 && children > 0) {
        setChildren(0); // Ensure no children without adults
        onPassengerChange(newAdults, 0);
      }
    }
  };

  const handleAddChild = () => {
    const newChildren = children + 1;
    setChildren(newChildren);
    onPassengerChange(adults, newChildren);
  };

  const handleRemoveChild = () => {
    if (children > 0) {
      const newChildren = children - 1;
      setChildren(newChildren);
      onPassengerChange(adults, newChildren);
    }
  };

  return (
    <div className="passenger-counter-dropdown">
      <Button
        label={`Passengers: ${adults + children}`}
        onClick={toggleDropdown}
        enable={true}
      />
      {isDropdownOpen && (
        <div className="dropdown-content">
          <div className="counter-section">
            <label>Adults</label>
            <div className="counter-controls">
              <Button
                label="-"
                onClick={handleRemoveAdult}
                enable={adults === 0 ? false : true}
              />
              <span>{adults}</span>

              <Button label="+" onClick={handleAddAdult} enable={true} />
            </div>
          </div>

          <div className="counter-section">
            <label>Children</label>
            <div className="counter-controls">
              <Button
                label="-"
                onClick={handleRemoveChild}
                enable={children === 0 ? false : true}
              />
              <span>{children}</span>
              <Button label="+" onClick={handleAddChild} enable={true} />
            </div>
          </div>

          <Button
            label="Done"
            onClick={toggleDropdown}
            className="done-button"
            enable={true}
          />
        </div>
      )}
    </div>
  );
};

export default PassengerCounterDropdown;
