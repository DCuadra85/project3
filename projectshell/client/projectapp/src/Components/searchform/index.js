import React from "react";
import "./style.css";

const SearchForm = (props) => {
    const { value, onChange, onSubmit } = props;
    return (
        <div>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                <label>Stock Search: </label>
                <wrapper>
                <input type="text" placeholder="type"
                value={value}
                onChange={onChange}
                /><button type="submit">
                go
                </button></wrapper>
                </div>
            </form>
        </div>
        )
    }

export default SearchForm;