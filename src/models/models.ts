export interface ILink {
  id: String,
  title: String
}

export interface IHowToItem {
  id: Number,
  icon: String,
  text: String
}

export interface ICollectionItem {
  id: Number,
  icon: String,
  text: String
}

export interface IStoryItem {
  id: Number,
  title: String,
  description: String
}

export interface IPartnerItem {
  id: Number,
  name: String,
  logo: String
}

export type ThemeContextType = string;

export type OnClickProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};