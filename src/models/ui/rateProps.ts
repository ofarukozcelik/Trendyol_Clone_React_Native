import {Rating} from '../data/productsState';

interface RatingProps {
  rating: Rating;
  rateSize: 'small' | 'medium' | 'large';
}

export type {RatingProps};
