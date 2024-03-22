/* eslint-disable react/prop-types */

import AddtoCartButton from "../../components/PaymentComponents/AddtoCartButton"
// import ViewReviewsButton from "../../components/PaymentComponents/ViewReviewsButton"
// import { Rating } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const MenuBox = ({items}) => {
  return (
    <div className=" section-center w-9/12 mx-auto max-w-screen-xl grid grid-cols-2 gap-y-8 gap-x-8 justify-items-center">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem
        return (
              <div key = {id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full h-48 object-cover" src={img}alt="{title}" />
                    <div className="flex flex-col justify-end">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                          {desc}
                        </p>
                      </div>
                      <div className="px-6 pt-4 pb-2 flex flex-row justify-between">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs {price}</span>
                        <AddtoCartButton id={id} price = {price} title={title} />
                      </div>
                    </div>
              </div>
        )
      })}
    </div>
  )
}

export default MenuBox