"use client";
import "/chessground/chessground.css";
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
        events: { after: onMove }
      },
      // ✅ ¡ESTE PARÁMETRO ES EL QUE FALTABA!
      assetsUrl: "/pieces/"
    });

    return () => cg.destroy();
  }, [fen]);


  return (
    <div
      ref={ref}
      style={{
        width: "480px",
        height: "480px",
        position: "relative"
      }}
    ></div>
  );

}
