import { useEffect, useState } from "react";
import "./styles.css";
import RestorentMenu from "./RestorentMenu";
import Carousels from "./Carousels";

export default function App() {
  return (
    <div className="App">
      {/* <RestorentMenu/> */}
      <Carousels />
    </div>
  );
}
