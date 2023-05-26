import React, { useEffect, useState } from "react";
export function Counter2(){
    const [count, setCount]=useState(0);
    const [loading, setLoading]= useState(true);
    useEffect (()=>{
        // const count= setLoading(()=> {
        // };
        setTimeout(()=>{
            setLoading("loadinggg")
        },2000);
    },[count, loading])
    function Decrease(){
        setCount(count -1)
    }
    function Increase(){
        setCount(count +1)
    }
        return (
            <div>
                {
                    loading=== true?
                    console.log("Loading"):
                
            <><button onClick={()=>Decrease()}>-</button>
                <h1>Count: {count}</h1>
                <button onClick={()=>Increase()}>+</button>
                </>
}
            </div>
    )
};