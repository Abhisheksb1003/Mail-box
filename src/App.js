import Headers from './Components/UI/Header';
import AuthPage from './Components/Pages/Auth-page';
import './App.css';
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Headers />
      <AuthPage />
    </Fragment>
  );
}

export default App;
