import { ReactNode } from 'react';

interface SpeciesIconsProps {
  icon: ReactNode;
  text: string | null;
}

const SpeciesIcons = ({ icon, text }: SpeciesIconsProps) =>
  text && (
    <p className="flex flex-row gap-2 items-center">
      {icon}
      {text}
    </p>
  );

export default SpeciesIcons;
