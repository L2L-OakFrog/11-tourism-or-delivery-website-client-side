import { useEffect, useState } from "react";

const useHotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('https://pure-eyrie-69335.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    return [hotels, setHotels];
}
export default useHotels;