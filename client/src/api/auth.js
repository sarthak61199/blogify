import { BASE_URL } from "../config";

export const register = async (payload) => {
  const resp = await fetch(BASE_URL + "/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await resp.json();
};
