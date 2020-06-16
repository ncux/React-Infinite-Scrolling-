import React, { useState } from 'react';
import { useSearch } from "../../hooks/useSearch";

export const Search = props => {

    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const onSearchInput = e => {
        setQuery(e.target.value);
        setPage(1);
    };

    useSearch(query, page);

    return (
        <div className="">
            <input onChange={ onSearchInput } type="text" placeholder="Search..." />

        </div>
    );

};

