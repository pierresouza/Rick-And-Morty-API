"use client";
import Image from "next/image";
import styles from "./page.module.css";
import useGetRickAndMortyEpisodes from "@/services/http/useGetRickAndMorty";
import { useEffect } from "react";

export default function Home() {
  const { GetRiackAndMortyEpisodes, data, error, loading } =
    useGetRickAndMortyEpisodes();

  useEffect(() => {
    GetRiackAndMortyEpisodes();
  }, []);

  console.log("Data=", data);

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        {data?.results.map((result) => {
          return (
            <div className={styles.boxInfo} key={result.id}>
              <h1 className={styles.mainText}>{result.name}</h1>
              <span className={styles.text}>
                Data de lançamento:{result.air_date}
              </span>
              <br />
              <span className={styles.text}>Episódio: {result.episode}</span>
              <br />
              <a target="_blank" href={result.url}>
                {result.url}
              </a>
              <br />
            </div>
          );
        })}
        <br />
      </div>
    </main>
  );
}
