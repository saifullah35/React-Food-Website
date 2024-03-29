import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'San Jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component
    // is first rendered. BAD CODE!!!
    // this useEffect method helps run code just ONE TIME  

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};