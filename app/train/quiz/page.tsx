"use client";
import { useState } from "react";
import Board from "../../../components/ChessboardWrapper";

export default function Quiz() {
  const [fen, setFen] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  );

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Modo Quiz</h1>

      <Board fen={fen} onMove={() => {}} />
    </main>
  );
}
