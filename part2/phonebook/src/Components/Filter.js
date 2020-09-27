import React from 'react'

const PeopleFilter = ({filterChanged,filterText}) =>{
    return(
        <div>
            Filter: <input value = {filterText} onChange={filterChanged} />
        </div>
    )
}

export default PeopleFilter;