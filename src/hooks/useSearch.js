import { useState, useEffect } from 'react';
import axios from 'axios';

const SEARCH_API = `http://openlibrary.org/search.json`;

export const useSearch = (query, page) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [moreStuff, setMoreStuff] = useState(false);

    const params = { q: query, page };
    let cancel;
    const cancelToken = new axios.CancelToken(c => cancel = c);

    const search = async () => {
        try {
            const { data } = await axios.get(SEARCH_API, { params, cancelToken });
            console.log(data);
            const newBooks = data.docs.map(book => book.title);
            setBooks(prevState => [...new Set([...prevState, ...newBooks])]);
            setMoreStuff(data.docs.length > 0);
            setLoading(false);
        } catch (e) {
            if (axios.isCancel(e)) return;
        }
    };

    useEffect(() => {
        setLoading(true);
        setError(false);
        search();
        return () => cancel();
    }, [query, page]);

};