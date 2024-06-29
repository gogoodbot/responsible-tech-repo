export const Tags = [
  { name: 'Tag-1', id: '1' },
  { name: 'Tag-2', id: '2' },
  { name: 'Tag-3', id: '3' },
];
const ALPHA_SHORT = /^[A-Za-z\s]{2,20}$/;
const ALPHA_MEDIUM = /^[A-Za-z\s]{2,50}$/;
const ALPHA_NUMERIC = /^[A-Za-z0-9_]{3,20}$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const URL = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/;
const EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE = /^\+?[1-9]\d{1,14}$/;
const PARAGRAPH_SHORT = /^.{1,1000}$/;
const PARAGRAPH_LONG = /^.{5,10000}$/;

export const REGEX_PATTERNS = {
  name: ALPHA_MEDIUM,
  summary: PARAGRAPH_LONG,
  role: ALPHA_MEDIUM,
  email: EMAIL,
  phone: PHONE,

  website: URL,
  link: URL,

  status: ALPHA_SHORT,
  legal_status: ALPHA_SHORT,

  focusArea: ALPHA_MEDIUM,
  sector_focus: ALPHA_MEDIUM,
  scope: ALPHA_MEDIUM,

  affiliation: ALPHA_MEDIUM,
  functional_role: ALPHA_MEDIUM,
  communities_of_focus: ALPHA_MEDIUM,
  stage: ALPHA_SHORT,
  composition: ALPHA_SHORT,
  size: ALPHA_SHORT,
  jurisdiction: ALPHA_SHORT,
  type: ALPHA_SHORT,
  notes: PARAGRAPH_SHORT,
  post: PARAGRAPH_SHORT,
  format: ALPHA_MEDIUM,

  entity: ALPHA_MEDIUM,
  sub_entity: ALPHA_MEDIUM,

  geographic_mandate: ALPHA_SHORT,
  mandate: ALPHA_SHORT,

  start_date: DATE,
  established_date: DATE,

  country: /^[A-Za-z\s]{2,60}$/,
  state_province: /^[A-Za-z\s]{2,60}$/,
  hq_province: /^[A-Za-z\s]{2,60}$/,
  hq_city: /^[A-Za-z\s]{2,60}$/,

  username: ALPHA_NUMERIC,
};
