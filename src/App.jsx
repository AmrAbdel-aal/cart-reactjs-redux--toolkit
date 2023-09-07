import { useState } from "react";

import "./App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import store from "./store";

function App() {
  const { isActiveModal } = useSelector((store) => store.modal);
  console.log(isActiveModal);
  return (
    <main className={isActiveModal ? "active" : "nothing"}>
      <Navbar />
      <Hero />
      {isActiveModal && <Modal />}
    </main>
  );
}

export default App;
