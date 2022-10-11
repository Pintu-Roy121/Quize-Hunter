
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Quizequestions from './components/Quizequestions/Quizequestions';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import PageNotFound from './components/Pagenotfound/PageNotFound';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: '/statistics',
          element: <Statistics />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/questions/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quizequestions />
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
