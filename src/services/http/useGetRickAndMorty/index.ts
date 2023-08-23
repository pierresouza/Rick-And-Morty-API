import { useCallback } from "react";
import { RemoteService } from "../RemoteServices";
import { ResultProps } from "./types";
import { useRickAndMortyAtom } from "@/hook/useRickAndMorty";
import { formatarDataBrasileira } from "../../../utils/formatarDataBrasileira";

const useGetRiackAndMortyEpisodes = () => {
  const { rickAndMortyAtom, setRickAndMortyData } = useRickAndMortyAtom();
  const GetRiackAndMortyEpisodes = useCallback(async () => {
    try {
      setRickAndMortyData({
        called: false,
        loading: true,
      });

      const response = await RemoteService.request<ResultProps>({
        method: "GET",
        resource: "api/episode",
      });

      const result = response.data.results?.map((item) => {
        const episode = {
          id: item.id,
          name: item.name,
          air_date: formatarDataBrasileira(item.air_date),
          episode: item.episode,
          characters: item.characters,
          url: item.url,
          created: item.created,
        };

        return episode;
      });

      setRickAndMortyData({
        data: {
          results: result || [],
        },
        called: false,
        loading: true,
      });
    } catch (err) {
      const error = err as any;
      setRickAndMortyData({
        called: true,
        loading: false,
        error: error.message,
      });
    }
  }, [setRickAndMortyData]);

  const { data, called, loading, error } = rickAndMortyAtom;

  return {
    GetRiackAndMortyEpisodes,
    data,
    called,
    loading,
    error,
  };
};

export default useGetRiackAndMortyEpisodes;
