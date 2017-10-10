import React from 'react'

class SearchBar extends React.Component{

    // Constructing a state object to manage state inside of a component
    constructor() {
        super()

        // Can access this object inside component
        this.state = {
            search: ''
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Render function gets called everytime data changes (reacts the to change)
    render() {
        return (
            // Note: "class" is a protected word in javascript, so use "classname"
            <div className="searchbar-container">
                <form className="search-form">
                    <input 
                        type="search"
                        name="search"
                        value={this.state.search}   // binding this.state... to JSX
                        className="search-input"
                        placeholder="Search Restaurants"
                        onChange={this.handleSearchChange}                 // will call function whenever change occurs
                    />
                </form>


            </div>
        )
    }
}

export default SearchBar
    // must export to have it accessible