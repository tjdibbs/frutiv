import React from 'react';
import Layout from "./components/layout";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Index from "./pages/LandingPage";

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path={"/"} element={<Index />} />
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
