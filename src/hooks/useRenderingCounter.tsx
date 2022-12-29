import  { useRef , useEffect } from 'react'

const useRenderingCounter = (name:string) => {
    let counter = useRef(0);
   
    useEffect(() => {
        console.log(name + ' is renered '+ counter.current)
        counter.current++
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[counter.current])
}

export default useRenderingCounter