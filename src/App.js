import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Banner from './components/banner/Banner';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Articles/Blog';
import SIngleTopic from './components/singleTopic/SIngleTopic';
import NotFound from './components/Not found/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:async () =>{
              return fetch( 'https://openapi.programming-hero.com/api/quiz')
          },
          element: [<Banner></Banner>, <Quiz></Quiz>]
        },
        {
          path:'/topic/:id',
          loader:async ({params}) =>{
            return fetch( `https://openapi.programming-hero.com/api/quiz/${params.id}` )
        },
          element:<SIngleTopic></SIngleTopic>
        },
        {
          path:'/statistics',
          loader:async () =>{
            return fetch( 'https://openapi.programming-hero.com/api/quiz')
        },
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        { path: '*', element: <NotFound></NotFound> }
      ]
    }
  ])

  return (
    <div className="App mx-10">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
