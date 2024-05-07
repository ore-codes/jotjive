import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Button from '@/components/Button';

import Illustration from '@/images/online-posts-landing-graphic.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen animate-landingGradient flex-col items-center justify-center gap-24 bg-landing-gradient bg-center dark:bg-landing-gradient-dark lg:flex-row">
      <div className="absolute right-8 top-8">
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[5rem] font-bold text-brand drop-shadow">
          JotJive.
        </h1>
        <p className="max-w-xl text-center text-2xl">
          Refreshing Your Tech Knowledge with the Latest Innovations and
          Insights
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline" size="lg">
            Contribute
          </Button>
          <Button size="lg" asChild>
            <Link href="/articles">Explore our articles</Link>
          </Button>
        </div>
      </div>
      <Image
        src={Illustration}
        alt="Illustration of online posts on a mobile device"
        className="size-96 lg:-order-1 "
      />
    </main>
  );
}

export const metadata: Metadata = {
  description:
    'Refreshing Your Tech Knowledge with the Latest Innovations and Insights',
};
