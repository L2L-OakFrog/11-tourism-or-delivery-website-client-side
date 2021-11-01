import { useEffect, useState } from "react";

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetch('https://pure-eyrie-69335.herokuapp.com/restaurants')
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, [])
    return [restaurants, setRestaurants];
}
export default useRestaurants;