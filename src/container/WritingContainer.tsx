import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import './MainContainer.css';
import FormatingMenu from '../components/menu/FormatingMenu';
import { FontStyle } from './interfaces';

function WritingContainer() {
  const [text, setText]: [string, any] = useState('');
  const [formatStyle, setFormatStyle]: [FontStyle, any] = useState({
    fromMenuSelection: false,
    isBold: false,
    isItalic: false,
  });

  const handleFormatStyle = (value: string): void => {
    setFormatStyle({
      ...formatStyle,
      fromMenuSelection: true,
      [value]: !formatStyle[value as keyof FontStyle],
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'b') || formatStyle.fromMenuSelection) {
        setFormatStyle({ ...formatStyle, isBold: !formatStyle.isBold });
        setText(text.concat('**'));
        setFormatStyle({
          ...formatStyle,
          fromMenuSelection: false,
        });
        return;
      }

      if ((e.ctrlKey && e.key === 'i') || formatStyle.fromMenuSelection) {
        setFormatStyle({ ...formatStyle, isItalic: !formatStyle.isItalic });
        setText(text.concat('*'));
        setFormatStyle({
          ...formatStyle,
          fromMenuSelection: false,
        });
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
          const nText = text.split('');
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
  }, [formatStyle, formatStyle.isBold, formatStyle.isItalic, text]);

  return (
    <div className="writingContainer" id="writeBox">
      <FormatingMenu
        handleFormatStyle={handleFormatStyle}
        formatStyle={formatStyle}
      />
      <pre>
        <ReactMarkdown
          children={text}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}/>
      </pre>
    </div>
  );
}

export default WritingContainer;
