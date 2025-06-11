import { useEffect, useState } from "react";
import "./styles.css";
import RestorentMenu from "./RestorentMenu";
import Carousels from "./Caresole";

export default function App() {
  return (
    <div className="App">
      {/* <RestorentMenu/> */}
      <Carousels />
    </div>
  );
}
