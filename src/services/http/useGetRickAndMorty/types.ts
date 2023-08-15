export interface dataProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string;
  url: string;
  created: string;
}
export interface ResultProps {
  results?: dataProps[];
}
