import { useEffect, useState } from 'react';
import './MainContainer.css';

function MainContainer() {
  const [text, setText] = useState('');

  useEffect(() => {
    let newText = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key) {
        if (e.key === 'Shift' || e.key === 'Meta') {
          return;
        }

        newText += e.key !== 'Backspace' ? e.key.toString() : '';
        setText(newText);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="mainContainer">
      <div className="sideMenu">Side View</div>
      <div className="writingContainer" id="writeBox">
        {text}
      </div>
    </div>
  );
}

export default MainContainer;
