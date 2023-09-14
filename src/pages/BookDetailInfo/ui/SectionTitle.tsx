interface SectionTitleProps {
  sectionHeader: string;
  sectionContent: string | number;
}

const SectionTitle = ({ sectionHeader, sectionContent }: SectionTitleProps) => (
  <p className="text-justify">
    <span className="font-bold">{sectionHeader}: </span>
    {sectionContent}
  </p>
);

export default SectionTitle;
