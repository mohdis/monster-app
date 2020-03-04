import React from 'react'
import './search-box.style.css'

export const SearchBox = ({placeholder, changeHandler}) => 
{
return <input type = 'search' className = 'search' 
placeholder = {placeholder}
onChange = {changeHandler}>
</input>

}