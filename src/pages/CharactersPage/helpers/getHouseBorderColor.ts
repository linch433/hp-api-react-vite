type House = 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';

const houseBorderColors: Record<House, string> = {
  Gryffindor: 'border-red-600',
  Slytherin: 'border-green-600',
  Ravenclaw: 'border-blue-600',
  Hufflepuff: 'border-yellow-600',
};

export function getHouseBorderColor(house: House): string {
  return houseBorderColors[house] || 'border-white';
}
