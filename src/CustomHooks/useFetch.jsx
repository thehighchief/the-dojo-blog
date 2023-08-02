import { useEffect, useState } from "react";

    const useFetch = (url) => {

        const [data, setData] = useState(null)
        const [error, setError] = useState(null)
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            fetch(url)

            .then((res)=>{
                
                if(!res.ok) {
                    throw Error('couldnt fetch from resource')
                }
                return res.json();
                
            }).then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
        },[url])

        return{ data, error, isLoading};
    }
     
    export default useFetch