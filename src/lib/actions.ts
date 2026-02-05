"use server";

import { signIn } from "./auth";

export const signinAction = async () => {
  await signIn("google", { redirectTo: "/" });
};
