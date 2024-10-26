import React from 'react';
import { useDimensions } from './logic/hooks';

const start_img = Math.floor(Math.random() * 5) + 1;

function App() {
    const [face, setFace] = React.useState<number>(start_img);
    const dimensions = useDimensions(0);
    const img_path = process.env.PUBLIC_URL + '/img_face/' + face.toString() + '.jpg';
    return (
        <div className="App">
            <img
                src={img_path}
                alt="mah big face"
                height={dimensions.height} width={dimensions.width}
            />
        </div>
    );
}

export default App;
