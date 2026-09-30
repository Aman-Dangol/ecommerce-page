import { CloseButton, Dialog, Portal, Separator } from "@chakra-ui/react";
import { Children, isValidElement, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const DialogBox = ({ children, title }: Props) => {
  const childArray = Children.toArray(children);

  const dialogBody =
    childArray.find(
      (child) => isValidElement(child) && child.type === Dialog.Body,
    ) ?? children;

  const dialogFooter = childArray.find(
    (child) => isValidElement(child) && child.type === Dialog.Footer,
  );

  const dialogTrigger = childArray.find(
    (child) => isValidElement(child) && child.type === Dialog.Trigger,
  );

  return (
    <Dialog.Root
      initialFocusEl={undefined}
      placement={"center"}
      onInteractOutside={(e) => {
        e.stopPropagation();
      }}>
      {dialogTrigger}

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content onPointerDown={(e) => e.stopPropagation()}>
            <Dialog.Header onClick={(e) => e.stopPropagation()}>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>

            <Separator />
            {dialogBody}

            {dialogFooter && (
              <>
                <Separator />
                {dialogFooter}
              </>
            )}
            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
