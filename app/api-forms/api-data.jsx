export const Tags = [
  { name: 'Tag-1', id: '1' },
  { name: 'Tag-2', id: '2' },
  { name: 'Tag-3', id: '3' },
];

export const REGEX_PATTERNS = {
  name: /^[A-Za-z\s]{2,50}$/,
  summary: /^.{5,10000}$/,
  role: /^[A-Za-z\s]{2,50}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /^\+?[1-9]\d{1,14}$/,

  website: /^(https?:\/\/[^\s/$.?#].[^\s]*)$/,
  link: /^(https?:\/\/[^\s/$.?#].[^\s]*)$/,

  status: /^[A-Za-z\s]{2,20}$/,
  legal_status: /^[A-Za-z\s]{2,20}$/,

  focusArea: /^[A-Za-z\s]{3,50}$/,
  sector_focus: /^[A-Za-z\s]{3,50}$/,
  scope: /^[A-Za-z\s]{3,50}$/,

  affiliation: /^[A-Za-z\s]{3,50}$/,
  functional_role: /^[A-Za-z\s]{2,50}$/,
  communities_of_focus: /^[A-Za-z\s]{3,50}$/,
  stage: /^[A-Za-z\s]{2,20}$/,
  composition: /^[A-Za-z\s]{2,20}$/,
  size: /^[A-Za-z\s]{3,20}$/,
  jurisdiction: /^[A-Za-z\s]{2,20}$/,
  type: /^[A-Za-z\s]{2,20}$/,
  notes: /^.{1,1000}$/,
  post: /^.{1,1000}$/,
  format: /^[A-Za-z\s]{1,50}$/,

  entity: /^[A-Za-z\s]{2,50}$/,
  sub_entity: /^[A-Za-z\s]{2,50}$/,

  geographic_mandate: /^[A-Za-z\s]{2,20}$/,
  mandate: /^[A-Za-z\s]{2,20}$/,

  start_date: /^\d{4}-\d{2}-\d{2}$/,
  established_date: /^\d{4}-\d{2}-\d{2}$/,

  country: /^[A-Za-z\s]{2,60}$/,
  state_province: /^[A-Za-z\s]{2,60}$/,
  hq_province: /^[A-Za-z\s]{2,60}$/,
  hq_city: /^[A-Za-z\s]{2,60}$/,

  username: /^[A-Za-z0-9_]{3,20}$/,
};
