import { type } from 'os';
import './simpleButton.scss';

type ButtonProps = {
    text: string,
    bgColor: string
}

const SimpleButton = ({ text, bgColor }: ButtonProps) => (
  <button className="button" style={{ backgroundColor: bgColor }}>
    { text }
  </button>
);

export default SimpleButton;
