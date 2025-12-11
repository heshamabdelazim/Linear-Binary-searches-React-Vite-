import React, { useRef, useState } from 'react'
import { arr, type product } from '../data';
import { binarySearch } from '../libs/binary';

function Binary() {
const [target, setTarget] = useState("")
    const displayProducts = target ? binarySearch(arr, target) :[] ;
    const inputDom = useRef();


    
  return (
        <>
        <h2>Binary Search</h2>
        <input type="search" name='search' ref={inputDom} />
        <input type="submit" onClick={() => setTarget(inputDom.current.value)} />
        <ul>
            { displayProducts?.map(prod=>
            <li key={prod.id}>
                {prod}
            </li>
            ) }
          </ul>
          </>
  )
}

export default Binary
