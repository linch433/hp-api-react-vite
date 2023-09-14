import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export interface NavLinkProps {
  path: string;
  navName: string;
}

const NavigationLink = ({ path, navName }: NavLinkProps) => (
  <NavLink to={path}>
    {({ isActive }) => (
      <>
        {navName}
        {isActive && (
          <motion.div
            className={clsx('h-1 rounded-full', 'bg-secondary')}
            layoutId="nav-underline"
          />
        )}
      </>
    )}
  </NavLink>
);

export default NavigationLink;
