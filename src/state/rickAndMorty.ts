import { atom } from "jotai";

export interface RickAndMortyProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string;
  url: string;
  created: string;
}

interface rickApi {
  results: RickAndMortyProps[];
}

interface RickAndMortyAtom {
  data?: rickApi;
  called: boolean;
  loading: boolean;
  error?: string;
}

export const rickAndMorty = atom<RickAndMortyAtom>({
  data: undefined,
  called: false,
  loading: false,
  error: "",
});
