import React from "react";
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../Component/Utils/AppRouter";
import '../Style/ResetStyle.scss'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
