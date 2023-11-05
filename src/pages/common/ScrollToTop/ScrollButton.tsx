import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Button } from './Styles';

const ScrollButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const toggleColor = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }

    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrolled >= 0.9 * (scrollHeight - clientHeight)) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    window.addEventListener('scroll', toggleColor);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
      window.removeEventListener('scroll', toggleColor);
    };
  }, []);

  return (
    <Button>
      <FaArrowAltCircleUp
        onClick={scrollToTop}
        style={{
          display: visible ? 'inline' : 'none',
          color: color ? 'white' : 'rgb(20,59,10)',
        }}
      />
    </Button>
  );
};

export default ScrollButton;
