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
import { TodaySpecialCarousel } from "./TodaySpecialCarousel";
export default function TodaysSpecial() {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  return (
    <div className="flex justify-end">
      <Card
        className="h-50 w-50 cursor-pointer overflow-hidden transition-opacity hover:opacity-70"
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src="https://t4.ftcdn.net/jpg/03/13/59/89/360_F_313598999_NCwASLAcQW4xvRkZjFti5b8ejh94GD7T.jpg"
        />
      </Card>
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
          <TodaySpecialCarousel />
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

