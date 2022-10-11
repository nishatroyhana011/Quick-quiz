import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Banner from './components/banner/Banner';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Articles/Blog';
import SIngleTopic from './components/singleTopic/SIngleTopic';

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
          element:<SIngleTopic></SIngleTopic>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        { path: '*', element: <h3>Not Found</h3> }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
