
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchTopicList';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [searchListDefault, setSearchListDefault] = useState();
    const [searchList, setSearchList] = useState();

    const fetchData = async () => {
        return await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setSearchList(data)
                setSearchListDefault(data)
            });}

    const updateInput = async (input) => {
        const filtered = searchListDefault.filter(search => {
            return search.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setSearchList(filtered);
    }

    useEffect( () => {fetchData()},[]);

    return (
        <>
            <h1>search List</h1>
            <SearchBar
                input={input}
                onChange={updateInput}
            />
            <SearchList searchList={searchList}/>
        </>
    );
}

export default SearchPage