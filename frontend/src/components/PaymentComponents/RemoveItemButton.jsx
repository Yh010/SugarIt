import { Button } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { removeItem } from "../../features/cart/CartSlice";


export default function RemoveItemButton({id}) {

    const dispatch = useDispatch()
    const removeItemHandler = () => {
        dispatch(removeItem({ id}));
        console.log(id);

    }

    return (
        <div>
            <Button className="flex items-center gap-3 bg-gold" onClick={ 
                removeItemHandler
            }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>  
            </Button>
        </div>
    )
}