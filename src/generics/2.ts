type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
type PickedTypes = Pick<AllType, 'name' | 'color' | 'position' | 'weight'>;
function compare<T extends PickedTypes, U extends PickedTypes>(
  top: T,
  bottom: U
): PickedTypes {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
