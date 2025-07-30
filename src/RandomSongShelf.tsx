import { useEffect, useState } from "react";
import { getRandomDeezerChartSong, DeezerTrack } from "./RandomSong";
import { Shelf, loadingSongObj } from "./Song";

const RandomSongShelf = () => {
  const [songs, setSongs] = useState<DeezerTrack[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const promises = Array.from({ length: 10 }, () => getRandomDeezerChartSong());
      const results = await Promise.all(promises);
      const valid = results.filter((song): song is DeezerTrack => !!song && !!song.preview);
      setSongs(valid);
    };
    fetchSongs();
  }, []);

  let list = songs.length ? songs.map(({ album, title, artist }) => ({
    coverImageUrl: album.cover,
    title,
    artist: artist.name,
  })) : Array(10).fill(loadingSongObj);

  return <Shelf name="Random Songs" list={list} />;
};

export default RandomSongShelf;