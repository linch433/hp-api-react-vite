import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import NavigationLink from '@/components/ui/NavigationLink.tsx';
import navigations from '@/app/constants/header.ts';
import HPLogo from '@/assets/hp.svg';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToHomeScreen = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col gap-2 mx-auto">
      <div className="flex justify-center">
        <img
          src={HPLogo}
          onClick={handleNavigateToHomeScreen}
          alt="Harry Potter logo"
          className={clsx('w-10', 'mt-4', 'cursor-pointer')}
        />
      </div>
      <div
        className={clsx(
          'flex flex-row ',
          'items-center justify-center',
          'gap-2 py-4',
        )}
      >
        {navigations.map((item) => (
          <NavigationLink
            key={item.path}
            path={item.path}
            navName={item.navName}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
