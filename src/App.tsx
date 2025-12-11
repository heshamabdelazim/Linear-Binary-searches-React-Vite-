
import './App.css'
import { arr } from './data';
import Linear from './algorithms/Linear';
import Binary from './algorithms/Binary';
import { useState } from 'react';

function App() {
  let [linearDuration, setLinearDuration] = useState<number>(0)
  let [binaryDuration, setBinaryDuration] = useState<number>(0)
  return (
    <div>
      <ul style={{display:'flex', flexWrap:"wrap", gap:"20px"}}>{ arr.map((prod,ind) => 
        <li key={ind}>
          {prod}
        </li>
      )}</ul>
      <Linear linearDuration={linearDuration} setLinearDuration={setLinearDuration} />
      <Binary binaryDuration={binaryDuration} setBinaryDuration={setBinaryDuration} />
    </div>
  )
}

export default App
