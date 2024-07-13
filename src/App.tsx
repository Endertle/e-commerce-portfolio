import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Toaster */}
        <Toaster closeButton={true} />
      </Layout>
    </Router>
  );
}
export default App;
