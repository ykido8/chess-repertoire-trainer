'use client';
import { useState } from 'react';
import Board from '@/components/Chessboard';
import { Position } from 'chessops';

export default function NewRepertoire() {
  const [fen, setFen] = useState("startpos");

  function onMove(from, to) {
    // TODO: update tree structure
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Crear Repertorio</h1>
      <Board fen={fen} onMove={onMove} />
    </main>
  );
}