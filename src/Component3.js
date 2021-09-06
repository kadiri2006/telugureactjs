import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Component3() {
        console.log(useLocation().search);        
    return (
        <div>
            <h1>3 component</h1>
        </div>
    )
}
