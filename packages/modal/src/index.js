/** @jsx jsx */
import { Dialog, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { jsx } from "@emotion/core";
import Box from "@spacesuit/box";
import Flex from "@spacesuit/flex";

export default function Modal({
  children,
  isOpen,
  onClose,
  showClose = true,
  contentProps,
  closeText = "Close",
  ...props
}) {
  return (
    <Dialog isOpen={isOpen} style={{ padding: 0, position: "relative" }}>
      <Flex
        flexDirection="column"
        sx={{ position: "relative" }}
        p="4"
        {...contentProps}
      >
        {children}
      </Flex>
      {showClose && (
        <Flex
          flexDirection="row"
          justifyContent="flex-end"
          sx={{ position: "absolute", right: 1, top: 1 }}
        >
          <Box
            as="button"
            title={closeText}
            fontSize="4"
            color="borderGray"
            sx={{
              border: "none"
            }}
            onClick={onClose}
            {...contentProps}
          >
            <span aria-hidden>&times;</span>
          </Box>
        </Flex>
      )}
    </Dialog>
  );
}
