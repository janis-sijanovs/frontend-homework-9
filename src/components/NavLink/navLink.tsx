import { type } from 'os';
import './navLink.scss';

type LinkProps = {
    text: string
}

const NavLink = ({ text }: LinkProps) => (
  <a href="#no" className="link">
    { text }
  </a>
);

export default NavLink;
