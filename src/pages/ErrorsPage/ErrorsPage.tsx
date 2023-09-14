import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/button.tsx';

const ErrorsPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div
      className={clsx(
        'min-h-screen',
        'flex flex-col',
        'items-center justify-center',
        'gap-4',
        'bg-foreground text-primary-foreground',
      )}
    >
      <h1
        className={clsx(
          'text-4xl font-extrabold',
          'scroll-m-20 tracking-tight',
          'lg:text-5xl',
        )}
      >
        Oopps!
      </h1>
      <p className="scroll-m-20 tracking-tight text-3xl">
        Sorry, an unexpected error has occurred.
      </p>
      <i className="scroll-m-20 tracking-tight text-xl">
        {isRouteErrorResponse(error)
          ? error.error?.message || error.statusText
          : 'Unknown error message'}
      </i>
      <Button
        variant="secondary"
        className="mt-4"
        onClick={handleNavigateToHome}
      >
        Return to &apos;Home Page&apos;
      </Button>
    </div>
  );
};

export default ErrorsPage;
