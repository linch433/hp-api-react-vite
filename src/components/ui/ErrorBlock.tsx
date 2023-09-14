import { clsx } from 'clsx';

const ErrorBlock = () => (
  <h1
    className={clsx(
      'text-4xl font-extrabold',
      'scroll-m-20 tracking-tight',
      'lg:text-5xl',
      'flex items-center justify-center',
      'min-h-[calc(100vh-15rem)] ',
    )}
  >
    Something went wrong
  </h1>
);

export default ErrorBlock;
