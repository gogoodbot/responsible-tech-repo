import Image from 'next/image';

export const iconMapping = {
  all: "https://img.icons8.com/nolan/64/06badb/0aa0f5/document.png",
  policy: "https://img.icons8.com/nolan/64/0aa0f5/0aa0f5/terms-and-conditions.png",
  organization: "https://img.icons8.com/nolan/64/7f0af5/7f0af5/company.png",
  litigation: "https://img.icons8.com/nolan/64/f73b6a/f73b6a/scales.png",
  resource: "https://img.icons8.com/nolan/64/f5a40a/f5a40a/commodity.png",
  stakeholder: "https://img.icons8.com/nolan/64/38bdf8/38bdf8/project-management.png",
};

const SearchIcon = ({ type, width, height, className }) => {
  const iconUrl = type && iconMapping[type.toLowerCase()];

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

export default SearchIcon;