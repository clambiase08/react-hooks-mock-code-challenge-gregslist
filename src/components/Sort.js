import React from 'react'

export default function Sort({onSortChange}) {

    function handleSort(e) {
        const selectedSort = e.target.value
        if (selectedSort === "none") {
            onSortChange(false)
        } 
        onSortChange(selectedSort)
    }

  return (
    <div>
        <div className='ui item'>
      <label>Sort By Location:</label>
    </div>
    <div className='ui item'> 
        <select className='ui selection dropdown' defaultValue={"none"} onChange={handleSort}> 
        <option value="none">None</option>
        <option value="location">Location</option>
      </select>
    </div>
    </div>
  )
}
