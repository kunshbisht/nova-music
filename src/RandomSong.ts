export type DeezerTrack = {
  id: number;
  title: string;
  preview: string;
  artist: {
    name: string;
    picture: string;
  };
  album: {
    title: string;
    cover: string;
  };
};

export async function getRandomDeezerChartSong(): Promise<DeezerTrack | null> {
  try {
    const res = await fetch('/api/chart');
    const json = await res.json();
    const tracks: DeezerTrack[] = json.tracks.data;

    if (!tracks.length) return null;

    const randomIndex = Math.floor(Math.random() * tracks.length);
    return tracks[randomIndex];
  } catch (error) {
    console.error('Error fetching Deezer chart:', error);
    return null;
  }
}