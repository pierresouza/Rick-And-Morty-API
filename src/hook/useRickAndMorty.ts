import { rickAndMorty } from "@/state/rickAndMorty";
import { useAtom } from "jotai";

export function useRickAndMortyAtom() {
  const [rickAndMortyAtom, setRickAndMortyData] = useAtom(rickAndMorty);
  return { rickAndMortyAtom, setRickAndMortyData };
}
