import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Settings() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin");
  }
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
}
