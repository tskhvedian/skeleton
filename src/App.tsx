import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "@/_root/pages/Home";
import SingleRecipe from "./_root/pages/SingleRecipe";

const App = () => {
  return (
    <main className="flex min-h-screen border-box p-10">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<SingleRecipe />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
