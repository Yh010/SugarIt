/* eslint-disable react/prop-types */

import AddtoCartButton from "../../components/PaymentComponents/AddtoCartButton"
import ViewReviewsButton from "../../components/PaymentComponents/ViewReviewsButton"

// eslint-disable-next-line react/prop-types
const MenuBox = ({items}) => {
  return (
    <div className=" section-center w-full mx-auto max-w-screen-xl grid grid-cols-2 gap-y-8 gap-x-8 justify-items-center">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem
        return (
          <article key={id} className="menu-item w-fit grid grid-cols-2 gap-y-6 gap-x-4 ">
            <img src={img} alt={title} className="photo object-cover w-full h-52 border-solid border-gold border-4" />
            <div className="item-info flex flex-col justify-between">
              <div className="">
                  <div>
                    <header className="flex justify-between border-b-[1px] border-dotted border-black">
                      <h4 className="font-bold">{title}</h4>
                      <h4 className="price text-black font-bold text-gold">Rs {price}</h4>
                    </header>
                    <p className="item-text text-sm text-grey">{desc}</p>
                  </div>
              </div>
              <div  className="flex justify-start">
                <AddtoCartButton id={ id} price={ price} title={title}/>
                <ViewReviewsButton/>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default MenuBox