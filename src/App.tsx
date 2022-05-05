import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDimensions } from './logic/hooks';
// import Rerender from './Rerender';

function App() {
    const dimensions = useDimensions(20);
    return (
        <div className="App">
            <img src={'img_face/1.jpg'} alt="logo" height={dimensions.height} width={dimensions.width}/>
            {/* <Rerender/> */}
            {/* {dimensions.height}  {dimensions.width} */}
        </div>
    );
}

export default App;
