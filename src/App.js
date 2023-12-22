
import './App.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { Routes,Route } from 'react-router-dom';
import About from './Page/Commonpage/Aboutpage/About';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <About />,
//   },
// ]);


function App() {
  return (
    // <RouterProvider router={router} />
    <Routes>
      <Route path='/' element={<About/>} />
    </Routes>

     );
}

export default App;
