import React from "react";

import Layout from "./components/Layout/Layout";
import ProductList from "./containers/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Layout>
        <ProductList />
      </Layout>
    </div>
  );
}

export default App;
