import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { providerMap, signIn } from "@/auth";

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id);
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`?error=${error.type}`);
              }
              throw error;
            }
          }}
        >
          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  );
}
