import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';

import './MainContainer.css';
import FormatingMenu from '../components/menu/FormatingMenu';
import { FontStyle } from './interfaces';

function WritingContainer() {
  const [text, setText]: [string, any] = useState('');
  const [formatStyle, setFormatStyle]: [FontStyle, any] = useState({
    isBold: false,
    isItalic: false,
  });

  const handleFormatStyle = (value: string): void => {
    setFormatStyle({
      ...formatStyle,
      [value]: !formatStyle[value as keyof FontStyle],
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'b') {
        setFormatStyle({ ...formatStyle, isBold: !formatStyle.isBold });
        setText(text.concat('**'));
        return;
      }

      if (e.ctrlKey && e.key === 'i') {
        setFormatStyle({ ...formatStyle, isItalic: !formatStyle.isItalic });
        setText(text.concat('*'));
        return;
      }

      if (e.key) {
        if (e.key === 'Shift' || e.key === 'Meta' || e.ctrlKey) {
          return;
        }
        if (e.key === 'Backspace') {
          const nText = text.split('');
          const removedText = nText.slice(0, text.length - 1).join('');
          setText(removedText);
        } else if (e.key === 'Enter') {
          console.log(e.key);
          const nText = text.split(',');
          setText([...nText, '\n'].join(''));
        } else {
          const nText = text.split(',');
          const concatText = [...nText, e.key].join('');
          setText(concatText);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [formatStyle, text]);

  return (
    <div className="writingContainer" id="writeBox">
      {/* <FormatingMenu handleFormatStyle={handleFormatStyle} /> */}
      <pre>
        <ReactMarkdown>{text}</ReactMarkdown>
      </pre>
    </div>
  );
}

export default WritingContainer;
