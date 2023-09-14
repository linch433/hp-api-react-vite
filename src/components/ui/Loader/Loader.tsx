import './Loader.css';
import { clsx } from 'clsx';

const Loader = () => (
  <div className="flex items-center justify-center">
    <span className="loader" />
  </div>
);

export const LoaderPerPage = () => (
  <div
    className={clsx(
      'flex items-center justify-center',
      'min-h-[calc(100vh-15rem)]',
    )}
  >
    <Loader />
  </div>
);

export default Loader;
