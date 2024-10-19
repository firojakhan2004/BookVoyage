import React from "react";

const Suggestions = ({ suggestions, onSuggestionClick }) => {
    return (
        <div className="suggestions-table">
            {suggestions.map((suggestion, index) => (
                <div
                    key={index}
                    className="suggestion-row"
                    onClick={() => onSuggestionClick(suggestion)}
                >
                    {suggestion.volumeInfo.title}
                </div>
            ))}
        </div>
    );
};

export default Suggestions;
