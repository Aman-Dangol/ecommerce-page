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
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { setToken, token } = useAuthstore();

  const router = useRouter();
  if (typeof token === "string") {
    router.push("/products");
  }
  return (
    <Box className='border-bg-secondary sm:[w-[40%]] m-2! mt-12! rounded-xl border md:mx-auto! lg:w-[70%]'>
      <Heading textAlign={"center"}>Login</Heading>
      <Separator />
      <form
        action={async (formdata) => {
          const res = await loginAction(formdata);

          if ("token" in res) {
            setToken(res.token);

            router.replace("/products");
          }
        }}>
        <Fieldset.Root className='p-4'>
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
