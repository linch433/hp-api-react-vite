import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from '@/app/layout/Layout.tsx';
import ErrorsPage from '@/pages/ErrorsPage/ErrorsPage.tsx';
import HomePage from '@/pages/HomePage/HomePage.tsx';
import BooksPage from '@/pages/BooksPage/BooksPage.tsx';
import CharactersPage from '@/pages/CharactersPage/CharactersPage.tsx';
import MoviesPage from '@/pages/MoviesPage/MoviesPage.tsx';
import PotionsPage from '@/pages/PotionsPage/PotionsPage.tsx';
import SpellsPage from '@/pages/SpellsPage/SpellsPage.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <ErrorsPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'books',
        element: <BooksPage />,
      },
      {
        path: 'characters',
        element: <CharactersPage />,
      },
      {
        path: 'movies',
        element: <MoviesPage />,
      },
      {
        path: 'potions',
        element: <PotionsPage />,
      },
      {
        path: 'spells',
        element: <SpellsPage />,
      },
    ],
  },
]);

export default routes;
