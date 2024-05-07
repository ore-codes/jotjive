import { PropsWithChildren } from 'react';
import Header from '@/chunks/Header';

export default function GuestLayout(props: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-light dark:bg-dark dark:text-light">
      <Header />
      <main className="container mx-auto flex flex-col gap-8 p-8 lg:gap-16 lg:p-16">
        {props.children}
      </main>
    </div>
  );
}
