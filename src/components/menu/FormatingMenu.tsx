import { FormatingMenuProps } from './interfaces';

function FormatingMenu({ handleFormatStyle }: FormatingMenuProps) {
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
    </div>
  );
}

export default FormatingMenu;
