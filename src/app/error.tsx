"use client"; // Error boundaries must be Client Components

import { Box, Button, Code, Heading } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error, "errr");
  }, [error]);

  return (
    <Box
      padding={"4"}
      spaceY={"4"}>
      <Heading size={"lg"}>Something went wrong!</Heading>
      <Button
        background={"red.600"}
        onClick={() => retry()}>
        Try again
      </Button>

      <Box>
        <Code
          padding={"2"}
          background={"secondary"}
          display={"block"}>
          <pre className='wrap-break-word whitespace-pre-wrap'>
            {JSON.stringify(
              {
                ...error,
                message: error.message,
                digest: error.digest,
              },
              null,
              2,
            )}{" "}
          </pre>
        </Code>
      </Box>
    </Box>
  );
}
