import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { useState } from "react";
import { OffersCarousel } from "./OffersCarousel";

export default function Offers() {
    const [open, setOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
 
    const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    return (
        <div className="flex justify-end">
            <Button
        className="h-50 w-30
         cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
        style={{background:'white'}}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src="data:image/jpeg;base64,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"
        />
      </Button>
       <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt="Sugar It"
              src="https://content.jdmagicbox.com/comp/rourkela/w3/9999px661.x661.211116002408.l9w3/catalogue/sugar-it-cafe-and-bake-shop-koel-nagar-rourkela-fast-food-vljw02cbxg.jpg"
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                "People who love to eat are always the best people." 
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                Julia Child
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              size="sm"
              color={isFavorite ? "red" : "blue-gray"}
              onClick={handleIsFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
            <Button color="gray" size="sm">
              Order Now!
            </Button>
          </div>
        </DialogHeader>
        <DialogBody>
          <OffersCarousel/>
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Take a look at this week's special items!
              </Typography>
            </div>
          </div>
        </DialogFooter>
      </Dialog>
        </div>
    )
} 

