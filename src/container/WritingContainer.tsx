import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

import './MainContainer.css';
import FormatingMenu from '../components/menu/FormatingMenu';
import { FontStyle } from './interfaces';

function WritingContainer() {
  const [text, setText]: [string[], any] = useState([]);
  const [formatStyle, setFormatStyle]: [FontStyle, any] = useState({
    isBold: false,
    isItalic: false,
  });

  const handleFormatStyle = (value: string): void => {
    setFormatStyle({
      ...formatStyle,
      [value]: !formatStyle[value]
    });
  };
  useEffect(() => {
    let newText: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key) {
        if (e.key === 'Shift' || e.key === 'Meta') {
          return;
        }
        if (e.key === 'Backspace') {
          newText = newText.slice(0, newText.length - 1);
        } else if (e.key === 'Enter') {
          newText.push('<br>');
        } else {
          newText.push(e.key);
        }
        setText(newText);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.addEventListener('keydown', handleKeyDown);
  }, []);

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(text.join('')),
  });

  return (
    <div className="writingContainer" id="writeBox">
      <FormatingMenu handleFormatStyle={handleFormatStyle} />
      <pre className="fontStyle" dangerouslySetInnerHTML={sanitizedData()} />
    </div>
  );
}

export default WritingContainer;
