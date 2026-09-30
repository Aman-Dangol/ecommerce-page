import { DialogBox } from "@/components/Dialog-box/dialog-box";
import { NumberAdder } from "@/components/number-adder/number-adder";
import { ProductCard } from "@/components/ui/Product-card/product-card";
import { Product } from "@/interfaces/product.type";
import { useAuthstore } from "@/utils/store/auth.store";
import {
  Button,
  DialogBody,
  DialogFooter,
  DialogTrigger,
} from "@chakra-ui/react";
import { MouseEvent } from "react";

export const AddToCardButton = ({ info }: { info: Product }) => {
  const { isAuthenticated } = useAuthstore();

  const onConfirm = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  if (!isAuthenticated)
    return (
      <Button
        className='rounded-xl!'
        onClick={(e) => e.stopPropagation()}>
        Add To Cart
      </Button>
    );

  return (
    <>
      <DialogBox title='Add to Cart'>
        <DialogTrigger asChild>
          <Button
            className='rounded-xl!'
            onClick={(e) => e.stopPropagation()}>
            Add To Cart
          </Button>
        </DialogTrigger>
        <DialogBody
          className='space-y-2'
          onClick={(e) => e.stopPropagation()}>
          <ProductCard
            productDetails={info}
            hidebutton
          />

          <NumberAdder />
        </DialogBody>
        <DialogFooter onClick={(e) => e.stopPropagation()}>
          <Button
            autoFocus
            width={"full"}
            onClick={onConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogBox>
    </>
  );
};
