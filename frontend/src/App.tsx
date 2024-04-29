import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/index.route";

const App = () => {
  return (
    <div className="container">
      <AppRoutes />
    </div>
  );
};

export default App;