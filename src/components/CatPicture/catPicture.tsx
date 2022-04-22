import { type } from 'os';
import './catPicture.scss';

type CatProps = {
    imgSrc: string
}

const CatPicture = ({ imgSrc }: CatProps) => (
  <div className="cat-box">
    <img className="cat-img" src={imgSrc} alt="Cat" />
  </div>
);

export default CatPicture;
