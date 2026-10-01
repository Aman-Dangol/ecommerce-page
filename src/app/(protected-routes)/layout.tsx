"use client";

import { useAuthstore } from "@/utils/store/auth.store";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { isAuthenticated, hydrated } = useAuthstore();
  const router = useRouter();

  if (!isAuthenticated && hydrated) {
    router.replace("/login");

    return;
  }
  if (!hydrated) {
    return "wait for zustand hyration";
  }

  return <div>{children}</div>;
}
