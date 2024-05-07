import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-brand p-2">
      <Link href="/">
        <h1 className="text-2xl font-semibold text-brand">JotJive.</h1>
      </Link>
      <ThemeSwitcher />
    </header>
  );
}
