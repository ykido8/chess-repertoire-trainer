'use client';
import { useState } from 'react';
import Board from '@/components/Chessboard';

export default function Quiz() {
  const [fen, setFen] = useState("startpos");

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Modo Quiz</h1>
      <Board fen={fen} onMove={() => {}} />
    </main>
  );
}
