import Image from 'next/image';

const ArtifactIcon = ({ type, width, height, className }) => {
  const iconMapping = {
    // Use up to 2 hex codes in the URL for colour gradient
    country: "https://img.icons8.com/nolan/64/06badb/0aa0f5/globe-earth.png",
    type: "https://img.icons8.com/nolan/64/06badb/0aa0f5/sorting-answers.png",
    link: "https://img.icons8.com/nolan/64/06badb/0aa0f5/internet.png",
    mandate: "https://img.icons8.com/nolan/64/06badb/0aa0f5/agreement.png",
    start_date: "https://img.icons8.com/nolan/64/06badb/0aa0f5/planner.png",
    modified_on: "https://img.icons8.com/nolan/64/06badb/0aa0f5/edit-property.png",
  };

  const iconUrl = iconMapping[type.toLowerCase()];

  return iconUrl ? (
    <Image
      src={iconUrl}
      alt={`Icon for ${type}`}
      width={width}
      height={height}
      className={`icon ${className || ""}`}
    />
  ) : null;
};
export default ArtifactIcon;