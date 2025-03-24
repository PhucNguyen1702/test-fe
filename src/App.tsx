import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "./i18next/i18n.ts";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
