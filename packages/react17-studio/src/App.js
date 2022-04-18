
import React from 'react';
import Studio from '@idraw/studio';
import templateList from './libs/template';

import './App.css';

const defaultTpl = templateList[0];

 
function App() {

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{display: 'flex'}}>
        <Studio {...{ 
          studioWidth: window.innerWidth,
          studioHeight: window.innerHeight,
          // studioWidth: 800,
          // studioHeight: 640,
          devicePixelRatio: window.devicePixelRatio,
          contextWidth: defaultTpl.width,
          contextHeight: defaultTpl.height,
          data: defaultTpl.data,
          // customElements: customDataList
          customTemplates: templateList
        }}></Studio>
      </div>
    </div>
  )
}


export default App;
