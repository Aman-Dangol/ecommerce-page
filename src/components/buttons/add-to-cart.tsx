import { DialogBox } from "@/components/Dialog-box/dialog-box";
import { NumberAdder } from "@/components/number-adder/number-adder";
import { ProductCard } from "@/components/ui/Product-card/product-card";
import { toaster } from "@/components/ui/toaster";
import { Product } from "@/interfaces/product.type";
import { useAuthstore } from "@/utils/store/auth.store";
import { useCartStore } from "@/utils/store/cart.store";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogTrigger,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode, useState } from "react";

interface BaseProps {
  info: Product;
  asChild?: boolean;
}

interface WithChildProp extends BaseProps {
  asChild?: true;
  children: ReactNode;
}
interface WithNoChildProp extends BaseProps {
  children?: never;
  asChild?: false;
}

export const AddToCartButton = ({
  info,
  children,
  asChild = false,
}: WithNoChildProp | WithChildProp) => {
  const { products } = useCartStore();
  const storeItem = products.find((i) => i.id === info.id);

  const [amount, setAmount] = useState(storeItem?.amount.toString() ?? "1");
  const { isAuthenticated } = useAuthstore();
  const { addProduct, updateProduct } = useCartStore();

  const router = useRouter();

  const onConfirm = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (storeItem?.id) {
      updateProduct({ amount: parseInt(amount), id: info.id });
      toaster.create({ title: "Item Updated", type: "success" });
    } else {
      if (amount) {
        addProduct({ amount: parseInt(amount), id: info.id });
        toaster.create({ title: "Item Added To Cart", type: "success" });
      }
    }
  };

  if (!isAuthenticated)
    return (
      <Button
        className='rounded-xl!'
        onClick={(e) => {
          e.stopPropagation();
          router.push("/login");
        }}>
        Add To Cart
      </Button>
    );

  return (
    <>
      <DialogBox title='Add to Cart'>
        <DialogTrigger asChild>
          {asChild ? (
            <div>{children}</div>
          ) : (
            <Button
              className='rounded-xl!'
              onClick={(e) => e.stopPropagation()}>
              Add To Cart
            </Button>
          )}
        </DialogTrigger>
        <DialogBody
          className='space-y-2'
          onClick={(e) => e.stopPropagation()}>
          <ProductCard
            productDetails={info}
            hidebutton
          />

          <NumberAdder
            value={amount}
            onChange={(amount) => setAmount(amount)}
          />
        </DialogBody>
        <DialogFooter>
          <Dialog.ActionTrigger asChild>
            <Button
              disabled={Number(amount) === 0}
              width={"full"}
              onClick={onConfirm}>
              Confirm
            </Button>
          </Dialog.ActionTrigger>
        </DialogFooter>
      </DialogBox>
    </>
  );
};
