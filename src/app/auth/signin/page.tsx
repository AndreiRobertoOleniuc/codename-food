import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { providerMap, signIn } from "@/auth";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default async function SignInPage() {
  return (
    <div className="w-svw h-svh flex flex-col justify-center items-center xsm:p-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Login with any of the following providers
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                try {
                  await signIn(provider.id, { callbackUrl: "/dashboard" });
                } catch (error) {
                  if (error instanceof AuthError) {
                    return redirect(`?error=${error.type}`);
                  }
                  throw error;
                }
              }}
            >
              <button
                type="submit"
                className="inline-flex h-10 w-full sm:w-10/12 items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="h-[18px] w-[18px] "
                />
                Sign in with {provider.name}
              </button>
            </form>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
