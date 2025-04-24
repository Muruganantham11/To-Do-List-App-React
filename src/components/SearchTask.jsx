import React from 'react'

const SearchTask = ({setSearchTask,searchTask}) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" className="absolute -left-200">search item</label>
        <input type="text"
        className="mt-3 outline-none bg-none border-2 p-1.5 w-102 ml-1.5 rounded-sm"
        id="search"
        placeholder="Search Task"
        value={searchTask}
        onChange={(e) =>setSearchTask(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchTask

