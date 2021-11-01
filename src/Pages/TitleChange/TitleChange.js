import { useEffect } from 'react';

const TitleChange = (props) => {
    useEffect(() => {
        document.title = props.title || "";
    }, [props.title]);
    return props.children;
}

export default TitleChange;