import Parent from './props/Parent.tsx';
import React from 'react';
import ReactDOM from 'react-dom';
import GuestList from './state/GuestList.tsx';

const App = () => {
  return ( 
  <div>
    <GuestList/>
    <Parent/>
  </div>  
  );  
};

ReactDOM.render(<App />,document.querySelector('#root'));