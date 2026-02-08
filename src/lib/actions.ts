"use server";

import { signIn, signOut } from "./auth";

export const signinAction = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const signoutAction = async () => {
  await signOut({ redirectTo: "/" });
};
