import { useEffect, useState } from "react";

const useOrders = () => {
    const [Orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://pure-eyrie-69335.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return [Orders, setOrders];
}
export default useOrders;