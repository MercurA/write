import { FontStyle } from '../../container/interfaces';

export interface FormatingMenuProps {
  formatStyle: FontStyle;
  handleFormatStyle: (el: string) => void;
}

export interface FontFam {
  verdana: string;
  arial: string;
  tahoma: string;
  trebuchet: string;
  times: string;
  georgia: string;
  garamond: string;
  courier: string;
  brush: string;
}
