import { useEffect, useState } from 'react';
import { FormatingMenuProps } from './interfaces';
import './FormatingMenu.css';

// const fontsFam: FontFam = {
//   verdana: 'Verdana',
//   arial: 'Arial',
//   tahoma: 'Tahoma',
//   trebuchet: 'Trebuchet MS',
//   times: 'Times New Roman',
//   georgia: 'Georgia',
//   garamond: 'Garamond',
//   courier: 'Courier New',
//   brush: 'Brush Script MT',
// };

const colors: string[] = ['blue', 'red', 'yellow'];

function FormatingMenu({ handleFormatStyle }: FormatingMenuProps) {
  const [open, setOpen]: [boolean, any] = useState(false);
  const [colorSelected, setColorSelection]: [string, any] = useState(colors[0]);

  const handleColorSelection = (e) => {
    setColorSelection(e.target.id);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="menu">
      <div
        className="boldStyle"
        aria-hidden="true"
        onClick={() => handleFormatStyle('isBold')}
      >
        B
      </div>
      <div
        className="italicStyle"
        aria-hidden="true"
        onClick={() => handleFormatStyle('isItalic')}
      >
        I
      </div>
      <div onClick={handleClick} aria-hidden="true" className="colorMenu">
        <div className={`box ${colorSelected}`} />
        <div className="menuDrawer">
          {open &&
            colors.map((color: string) => (
              <div
                className={`box ${color}`}
                id={`${color}`}
                onClick={handleColorSelection}
                aria-hidden="true"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FormatingMenu;
