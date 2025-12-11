import { useRef, useState } from "react";
import { linearSearch } from "../libs/linear";
import { arr } from "../data";

function Linear() {
    const [inputVal, setInputVal] = useState("")
    const displayProducts = inputVal ? linearSearch(arr, inputVal) :[] ;
    const inputDom = useRef();
    return (
        <>
        <h2>Linear Search</h2>
        <input type="search" name='search' ref={inputDom} />
        <input type="submit" onClick={() => setInputVal(inputDom.current.value)} />
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

export default Linear
