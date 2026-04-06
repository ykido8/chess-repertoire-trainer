"use client";
import { Chessground } from "chessground";
import { useEffect, useRef } from "react";

export default function Board({ fen, onMove }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const cg = Chessground(ref.current, {
      fen,
      movable: {
        free: false,
        events: { after: onMove },
      },
    });

    return () => cg.destroy();
  }, [fen]);

  return <div ref={ref} className="w-[400px] h-[400px]" />;
}
