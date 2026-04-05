export default function Train() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Entrenamiento</h1>
      <p>Elige el modo:</p>
      <ul className="list-disc ml-6">
        <li><a href="/train/recite" className="text-blue-600 underline">Modo Recitación</a></li>
        <li><a href="/train/quiz" className="text-blue-600 underline">Modo Quiz</a></li>
      </ul>
    </main>
  );
}
