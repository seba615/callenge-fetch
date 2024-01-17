import { useEffect, useState } from "react"
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat';

export function useCatImage({ fact }) {
    const [image, setImage] = useState('');

    useEffect(() => {
        if (!fact)
            return;
        const firstWord = fact.split(' ', 1).join(' ');
        fetch('https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true')
            .then(response => response.json())
            .then(imgData => {
                const { _id } = imgData;
                setImage({ id: _id, word: firstWord });
            })
    }, [fact]);
    
    return { imageURL : `${CAT_PREFIX_IMAGE_URL}/${image.id}/says/${image.word}` };
}