import { Skeleton } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  redirect("/products");
}
