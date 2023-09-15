interface Character {
  slug: string;
  name: string;
  born: string | null;
  died: string | null;
  gender: string | null;
  species: string | null;
  height: string | null;
  weight: string | null;
  hair_color: string | null;
  eye_color: string | null;
  skin_color: string | null;
  blood_status: string | null;
  nationality: string | null;
  animagus: string | null;
  boggart: string | null;
  house: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';
  patronus: string | null;
  alias_names: string[] | null;
  family_member: string[] | null;
  jobs: string[] | null;
  romances: string[] | null;
  titles: string[] | null;
  wands: string[] | null;
  image: string | null;
  wiki: string | null;
}

export interface CharacterItem {
  id: string;
  type: string;
  attributes: Character;
}
