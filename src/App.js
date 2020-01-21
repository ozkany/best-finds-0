import React from "react";

import Layout from "./components/Layout/Layout";
import Products from "./containers/Products/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Layout>
        <Products />
      </Layout>
    </div>
  );
}

export default App;
