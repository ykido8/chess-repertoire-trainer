export async function fetchChesscomArchive(username: string) {
  const res = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`);
  const data = await res.json();
  return data.archives;
}

export async function fetchChesscomGames(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.games;
}
