import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { GamePage } from './Pages/GamePage.tsx';
import { PieceProvider } from './contexts/PieceProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PieceProvider>
      <RouterProvider router={router} />
    </PieceProvider>
  </React.StrictMode>,
)
