import './App.css';
import ClassComponent from './component/ClassComponent';
import Functional from './component/Functional';
import './component/Style.css';

import { useState } from 'react';
function App() {
  const[name1,setName1]=useState(false);
  const[name2,setName2]=useState(false);

    return (
    <div className="App">
      <h1 className='cls0'>Style Using Function Component and Class Component</h1>
      <div className="btn">
      <header1 >  
      <button className="cls1" onClick={()=>{name1?setName1(false):setName1(true)}}>To Style with Functional Component</button>
      {name1&& <Functional />}
      </header1>

      <header2 >
      <button className="cls1" onClick={()=>{name2?setName2(false):setName2(true)}} >To Style with Class Component</button>
      {name2&& <ClassComponent />}
      </header2>
      </div>
    </div>
  );
}


export default App;
