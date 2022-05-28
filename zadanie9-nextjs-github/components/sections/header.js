import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-2 rounded-b-md text-lg">
      <Link href="/">Github app</Link>
    </header>
  );
}
