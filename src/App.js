import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import NaveSection from './Components/NaveSection/NaveSection';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';
import Shop from './Components/Shop/Shop';


function App() {
  const router = createBrowserRouter([
    {path:'/', element: <NaveSection/>, children: [
      {path:'/', element: <Shop/>},
      {path:'home', element: <Shop/>,
        loader: () => {
          return fetch('products.json');
        }},
      {path:'order', element: <Order/>},
      {path:'about', element: <About/>,},
      {path:'login', element: <Login/>},
    ]}
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
