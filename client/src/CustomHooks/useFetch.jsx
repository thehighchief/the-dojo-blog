import { useEffect, useState } from "react";

    const useFetch = (url) => {

        

        const [data, setData] = useState(null)
        const [error, setError] = useState(null)
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {

            const abortControl = new AbortController()

            fetch(url, {signal: abortControl.signal })

            .then((res)=>{
                
                if(!res.ok) {
                    throw Error('couldnt fetch from resource, Try again')
                }
                return res.json();
                
            }).then(data => {

                setData(data)
                setIsLoading(false)
                setError(null)

            }).catch(err => {

                if(err.name === 'AbortError') {
                    console.log('aborted')
                }else {
                    setIsLoading(false)
                    setError(err.message)
                }
            })

                return () => abortControl.abort();

        },[url])

        return{ data, error, isLoading};
    }
     
    export default useFetch