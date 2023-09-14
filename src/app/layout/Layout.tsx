import { ReactNode } from 'react';
import Header from '@/app/layout/Header.tsx';
import { clsx } from 'clsx';
import Footer from '@/app/layout/Footer.tsx';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div
    className={clsx(
      'flex flex-col gap-4',
      'bg-foreground text-primary-foreground text-xl',
    )}
  >
    <Header />
    <section className="min-h-[calc(100vh-9.2rem)] mx-auto">{children}</section>
    <Footer />
  </div>
);

export default Layout;
