"use server";

import { login } from "@/app/utils/api-routes/auth-routes/auth.routes";

export const loginAction = async (data: FormData) => {
  const username = data.get("username") as string;
  const password = data.get("password") as string;

  const res = await login({ username, password });

  return res;
};
