import { useEffect, useState } from "react";

const useTours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://pure-eyrie-69335.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return [tours, setTours];
}
export default useTours;