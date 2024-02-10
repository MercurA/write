import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

import './MainContainer.css';

function MainContainer() {
  const [text, setText] = useState('');
  const [formatStyle, setFormatStyle] = useState({
    isBold: false,
    isItalic: false,
  });

  useEffect(() => {
    let newText = '';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key) {
        if (e.key === 'Shift' || e.key === 'Meta') {
          return;
        }
        if (e.key === 'Backspace') {
          newText = newText
            .split('')
            .slice(0, newText.length - 1)
            .join('');
        } else if (e.key === 'Enter') {
          newText += '<br>';
        } else {
          newText += e.key;
        }
        setText(newText);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.addEventListener('keydown', handleKeyDown);
  }, []);

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(text),
  });

  return (
    <div className="mainContainer">
      <div className="sideMenu">Side View</div>
      <div className="writingContainer" id="writeBox">
        <div className="menu">
          <div
            className="boldStyle"
            aria-hidden="true"
            onClick={() =>
              setFormatStyle({ ...formatStyle, isBold: !formatStyle.isBold })
            }
          >
            B
          </div>
          <div
            className="italicStyle"
            aria-hidden="true"
            onClick={() =>
              setFormatStyle({
                ...formatStyle,
                isItalic: !formatStyle.isItalic,
              })
            }
          >
            I
          </div>
        </div>
        <div dangerouslySetInnerHTML={sanitizedData()} />
      </div>
    </div>
  );
}

export default MainContainer;
