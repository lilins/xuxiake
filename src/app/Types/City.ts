import { AncientCity } from './AncientCity';
import { Coordinate } from './Coordinate';

export class City {
  id: number;
  name: string;
  coordinate: Coordinate;
  usedNames: AncientCity[];
}