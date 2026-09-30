"use client";

import { loginAction } from "@/app/login/action";
import { useAuthstore } from "@/utils/store/auth.store";
import {
  Box,
  Button,
  Field,
  Fieldset,
  Heading,
  Input,
  Separator,
  Stack,
} from "@chakra-ui/react";

export default function LoginPage() {
  const { setToken } = useAuthstore();
  return (
    <Box className='border-bg-secondary mx-auto mt-12 w-[70%] rounded-xl border'>
      <Heading textAlign={"center"}>Login</Heading>
      <Separator />
      <form
        action={async (formdata) => {
          const res = await loginAction(formdata);

          if ("token" in res) {
            setToken(res.token);
          }
        }}>
        <Fieldset.Root
          className='p-4'
          size='lg'
          maxW='md'>
          <Stack>
            <Fieldset.Legend>Contact details</Fieldset.Legend>
            <Fieldset.HelperText>
              Please provide your contact details below.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>username</Field.Label>
              <Input name='username' />
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input
                name='password'
                type='password'
              />
            </Field.Root>
          </Fieldset.Content>

          <Button
            type='submit'
            alignSelf='flex-start'>
            Submit
          </Button>
        </Fieldset.Root>
      </form>
    </Box>
  );
}
