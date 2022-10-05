
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Users from './components/Users/Users';
import UserDetails from './components/Usser/UserDetails/UserDetails';
import Main from './layout/Main';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <div>This is Home page</div>
        },
        {
          path: '/home',
          element: <div>This is Home page</div>
        },
        {
          path: '/product',
          element: <div>This is Product page</div>
        },
        {
          path: '/users',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users></Users>
        },
        {
          path: '/users/:userId',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          },
          element: <UserDetails></UserDetails>
        },
        {
          path: '/posts',
          element: <div>This is Post page</div>
        },
        {
          path: '/about',
          element: <div>This is About page</div>
        }
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
