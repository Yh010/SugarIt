/* eslint-disable react/prop-types */

import AddtoCartButton from "../../components/PaymentComponents/AddtoCartButton"
import ViewReviewsButton from "../../components/PaymentComponents/ViewReviewsButton"

// eslint-disable-next-line react/prop-types
const MenuBox = ({items}) => {
  return (
    <div className=" section-center w-full mx-auto max-w-screen-xl grid grid-cols-2 gap-y-8 gap-x-4 justify-items-center">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem
        return (
          <article key={id} className="menu-item grid grid-cols-2 gap-y-4 gap-x-4 max-w-md">
            <img src={img} alt={title} className="photo object-fit-cover w-full h-52 border-black border rounded-md block" />
            <div className="item-info">
              <div className="justify-between">
                  <div>
                    <header className="flex justify-between border-b-[1px] border-dotted border-black">
                      <h4 className="font-bold">{title}</h4>
                      <h4 className="price text-black font-bold">Rs {price}</h4>
                    </header>
                    <p className="item-text text-sm">{desc}</p>
                  </div>
                  <div >
                  <AddtoCartButton />
                  <ViewReviewsButton/>
                  </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default MenuBox