import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState()
  console.log(data,"asjkgfjkas")
  return (
     <div>
     <input type="file" onChange={(e)=>setData(e.target.files)} />
   </div>
  );
}

export default App;
