import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import Suggestions from "./Suggestions"; // Import the new Suggestions component

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios
                .get(
                    "https://www.googleapis.com/books/v1/volumes?q=" +
                        search +
                        "&key=AIzaSyDRYA2Io8n9gOTJwrEKzoyYmNeWpXHamTg" +
                        "&maxResults=40"
                )
                .then((res) => setData(res.data.items))
                .catch((err) => console.log(err));
        } else {
            axios
                .get(
                    "https://www.googleapis.com/books/v1/volumes?q=" +
                        search +
                        "&key=AIzaSyDRYA2Io8n9gOTJwrEKzoyYmNeWpXHamTg" +
                        "&maxResults=5"
                )
                .then((res) => setSuggestions(res.data.items))
                .catch((err) => console.log(err));
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion.volumeInfo.title);
        setSuggestions([]);
        searchBook({ key: "Enter" }); // Trigger the search when a suggestion is clicked
    };

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>
                        A room without books is like
                        <br /> a body without a soul.
                    </h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyUp={searchBook} // Change from onKeyPress to onKeyUp for instant suggestions
                        />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    {suggestions.length > 0 && (
                        <Suggestions
                            suggestions={suggestions}
                            onSuggestionClick={handleSuggestionClick}
                        />
                    )}
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                <Card book={bookData} />
            </div>
        </>
    );
};

export default Main;
