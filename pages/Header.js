import Link from 'next/link';
export default function Header() {
  return (
    <header className="flex flex-row p-4 bg-emerald-300 text-black text-3xl justify justify-between">
      <h1>Cookie Stand Admin Page</h1>
      <Link
        href="/newpage"
        className="text-emerald-700 text-lg hover:text-emerald-500"
      >
        <h2>Home</h2>
      </Link>
    </header>
  );
}
