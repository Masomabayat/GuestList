import React from 'react';
import { ChildAsFC } from './Child.tsx';

const Parent = () => {
    return <ChildAsFC color='red' onClick={() =>
     console.log('clicked')
     } >;
        </ChildAsFC>;

};  

export default Parent; 