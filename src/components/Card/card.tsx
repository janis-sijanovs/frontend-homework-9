import { type } from 'os';
import './card.scss';

type CardProps = {
    title: string,
    description: string
}

const Card = ({ title, description }: CardProps) => (
  <div className="card">
    <p className="card__text">{title}</p>
    <p className="card__text">{description}</p>
    <button className="card__button">ACTION</button>
  </div>
);

export default Card;
