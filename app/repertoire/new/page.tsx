"use client";
import { useState } from "react";
import Board from "../../../components/ChessboardWrapper";

export default function NewRepertoire() {
  const [fen, setFen] = useState("startpos");

  function onMove(from, to) {
    // TODO: lógica para el repertorio (pronto lo hacemos juntos)
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Crear Repertorio</h1>
      <Board fen={fen} onMove={onMove} />
    </main>
  );
}
