import { FontFam, FormatingMenuProps } from './interfaces';

const fontsFam: FontFam = {
  verdana: 'Verdana',
  arial: 'Arial',
  tahoma: 'Tahoma',
  trebuchet: 'Trebuchet MS',
  times: 'Times New Roman',
  georgia: 'Georgia',
  garamond: 'Garamond',
  courier: 'Courier New',
  brush: 'Brush Script MT',
};

function FormatingMenu({ handleFormatStyle }: FormatingMenuProps) {
  const fonts = Object.keys(fontsFam);
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
      <select>
        {fonts.map((el: string) => (
          <option key={el}>{fontsFam[el as keyof FontFam]}</option>
        ))}
      </select>
    </div>
  );
}

export default FormatingMenu;
