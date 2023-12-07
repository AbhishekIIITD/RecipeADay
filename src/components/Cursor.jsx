// components/CustomCursor.js
import { useState, useEffect } from 'react';
import styles from '../styles/CustomCursor.module.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const activateCursor = () => {
    setIsActive(true);
  };

  const deactivateCursor = () => {
    setIsActive(false);
    setIsLinkHovered(false);
    setIsButtonHovered(false);
  };

  const handleLinkHover = () => {
    setIsLinkHovered(true);
  };

  const handleLinkLeave = () => {
    setIsLinkHovered(false);
  };

  const handleButtonHover = () => {
    setIsButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', activateCursor);
    document.addEventListener('mouseleave', deactivateCursor);

    const links = document.querySelectorAll('Link');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', handleButtonHover);
      button.addEventListener('mouseleave', handleButtonLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', activateCursor);
      document.removeEventListener('mouseleave', deactivateCursor);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });

      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', handleButtonHover);
        button.removeEventListener('mouseleave', handleButtonLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.cursor} ${isActive ? styles.active : ''} ${
          isLinkHovered ? styles['link-hover'] : ''
        } ${isButtonHovered ? styles['button-hover'] : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
