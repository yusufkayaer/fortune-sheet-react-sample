import React from 'react';
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import data from "./data";
import newData from "./newData";

function App() {
  const [state, setState] = React.useState<any>([data]);

  const onSetNewSheets = () => {
    setState([newData])
  }

  return (
    <div style={{ width: '100%', height: "100%" }}>
      <button onClick={onSetNewSheets}>Set New Sheets</button>
      <Workbook data={state} />
    </div>
  );
}

export default App;
