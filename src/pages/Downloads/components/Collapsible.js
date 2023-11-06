import React, { useState, useRef } from "react";

const Collapsible = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef(null);

  const [height, setHeight] = useState(0);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  };

  const classes = `list-group-item ${isExpanded ? "is-expanded" : ""}`;
  const currentHeight = isExpanded ? height : 0;

  return (
    <div className={classes}>
      <div className="card-title"  onClick={handleToggle}>
        <h2 style={{ fontFamily: 'Poppins'}}>{title}</h2>
      </div>
      <div className="card-collapse" style={{ height: currentHeight + "px" }}>
        <div className="card-body" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
