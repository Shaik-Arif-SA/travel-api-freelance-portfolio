export type NavLinksType = {
  name: string;
  link: string;
};
export type LinkItemType = {
  name: string;
  icon: React.ElementType;
  link?: string;
};
export type TestimonialType = {
  id: number;
  name: string;
  role: string;
  image: string;
  disc: string;
};
export type MentorType = {
  id: number;
  name: string;
  subject: string;
  institute: string;
  image: string;
};

export type TapsType = {
  id: number;
  tag: string;
  tagColor: string;
  bgColor: string;
  borderColor: string;
  list: string[];
  svg: string;
};
export type ServiceType = {
  jee: TapsType[];
  neet: TapsType[];
  tt: Omit<TapsType, 'tag' | 'tagColor'>[];
};
