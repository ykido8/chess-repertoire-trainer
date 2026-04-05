export async function fetchLichessGames(username: string) {
  const res = await fetch(`https://lichess.org/api/games/user/${username}?max=50&moves=true&pgnInJson=true`, {
    headers: { "Accept": "application/x-ndjson" }
  });
  return res.text();
}