import React from 'react';
import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent.tsx';

const App = () => {
  return ( 
  <div>
    <EventComponent/>
    
  </div>  
  );  
};

ReactDOM.render(<App />,document.querySelector('#root'));