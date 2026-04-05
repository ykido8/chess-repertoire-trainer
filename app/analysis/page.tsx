import { fetchLichessGames } from '@/lib/lichess';
import { fetchChesscomArchive } from '@/lib/chesscom';

export default async function Analysis() {
  // TODO: User input for username

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Análisis de Aperturas</h1>
      <p>Conecta tu cuenta de Lichess o Chess.com para detectar tus errores frecuentes.</p>
    </main>
  );
}