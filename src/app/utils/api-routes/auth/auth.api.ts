export const login = async () => {
  try {
    const data = await fetch("/dummyJson/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
      }),
    });

    return data;
  } catch {
    throw new Error("Something went wrong");
  }
};

export const getLoggedInuser = async () => {
  try {
    const data = await fetch("/dummyJson/auth/me", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return data;
  } catch {
    throw new Error("error fetccing looged in user");
  }
};
