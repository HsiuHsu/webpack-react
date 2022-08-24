import React from 'react';
import './index.css';
import reactPic from './public/img/react-banner.jpeg'

function App() {
    return (
        <div className='wrapper'>
            <p style={{ fontSize: 30 }}>React webpack</p>
            <img src={reactPic} alt='react' />
        </div>
    )
}
export default App;