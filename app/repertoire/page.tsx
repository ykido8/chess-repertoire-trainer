import Link from "next/link";

export default function Repertoire() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Tu Repertorio</h1>

      <Link href="/repertoire/new" className="text-blue-600 underline">
        Crear nuevo repertorio
      </Link>
    </main>
  );
}
