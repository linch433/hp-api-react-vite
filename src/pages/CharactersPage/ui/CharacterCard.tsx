import { clsx } from 'clsx';
import { getHouseBorderColor } from '@/pages/CharactersPage/helpers/getHouseBorderColor.ts';
import SpeciesIcons from '@/components/ui/SpeciesIcons.tsx';
import { MdOutlineTransgender } from 'react-icons/md';
import { GiHalfDead } from 'react-icons/gi';
import { CharacterItem } from '@/pages/CharactersPage/types/characters.type.ts';

interface CharacterCardProps {
  character: CharacterItem;
}

const CharacterCard = ({ character }: CharacterCardProps) => (
  <div
    key={character.id}
    className={clsx(
      'bg-accent-foreground w-60',
      'flex flex-col',
      'border-2 rounded',
      getHouseBorderColor(character.attributes.house),
    )}
  >
    {character.attributes.image && (
      <section className="max-h-72 min-h-[10rem]">
        <img
          alt={character.attributes.slug}
          src={character.attributes.image}
          loading="lazy"
          className="rounded w-full h-full object-cover object-top"
        />
      </section>
    )}
    <div className="p-4">
      <p className="font-semibold">{character.attributes.name}</p>
      <section className="mt-2">
        <SpeciesIcons
          icon={<MdOutlineTransgender size={22} />}
          text={character.attributes.gender}
        />
        <SpeciesIcons
          icon={<GiHalfDead size={22} />}
          text={character.attributes.species}
        />
      </section>
    </div>
  </div>
);

export default CharacterCard;
