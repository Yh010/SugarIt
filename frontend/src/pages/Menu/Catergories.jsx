/* eslint-disable react/prop-types */
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container mb-16 flex flex-wrap justify-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn uppercase border-transparent font-medium mx-2 py-1 px-2 rounded transition duration-300 hover:bg-gold hover:text-white"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories