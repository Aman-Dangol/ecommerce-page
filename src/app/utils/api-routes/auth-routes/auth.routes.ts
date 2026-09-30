import { urlBuilder } from "@/utils/urlBuilder";

const BasrUrl = "https://fakestoreapi.com";

export const login = async ({ username, password }: Login) => {
  const url = urlBuilder({ baseUrl: BasrUrl, subroutes: "/auth/login" });

  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (data.ok) {
    const response = await data.json();

    return response as { token: string };
  } else {
    return { status: data.status };
  }
};

export interface Login {
  username: string;
  password: string;
}
