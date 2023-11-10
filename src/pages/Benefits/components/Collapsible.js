import{ useState, useRef } from "react";
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const Collapsible = ({ title, children }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
  const rotationClass = isExpanded ? "rotate-icon" : "";

  return (
    <div className={classes} style={{ backgroundColor: 'rgba(20, 59, 10, 0.005)', padding: '1rem'}}>
      <div className="card-title" onClick={handleToggle} style={{ paddingBottom:'1rem', borderBottom: '3px solid green', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2 style={{ fontFamily: 'Poppins', fontSize: isMobile ? 16 : 30 }}>{title}</h2>
        <div className={`icon ${rotationClass}`}>&#9660;</div>
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
