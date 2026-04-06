"use client";

import dynamic from "next/dynamic";

const Board = dynamic(() => import("./Chessboard"), {
  ssr: false,
});

export default Board;
