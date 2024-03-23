import { Button } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addItem } from "../../features/cart/CartSlice";


export default function AddtoCartButton({id,title,price}) {

    const dispatch = useDispatch()
    const addItemHandler = () => {
        dispatch(addItem({ id, title,price}));
        console.log(id,price,title);

    }

    return (
        <div>
            <Button className="bg-gold hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ 
                addItemHandler
            }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-1 h-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Add
            </Button>
        </div>
    )
}