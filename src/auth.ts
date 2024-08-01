import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import Google from "next-auth/providers/google";
import { db } from "./server/db";
import { Provider } from "@auth/core/providers";

const providers: Provider[] = [
  GitHub,
  Google({
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  }),
];

const findProviderImage = (providerId: string) => {
  switch (providerId) {
    case "github":
      return "https://www.svgrepo.com/show/512317/github-142.svg";
    case "google":
      return "https://www.svgrepo.com/show/475656/google-color.svg";
    default:
      return "";
  }
};

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return {
      id: providerData.id,
      name: providerData.name,
      image: findProviderImage(providerData.id),
    };
  } else {
    return {
      id: provider.id,
      name: provider.name,
      image: findProviderImage(provider.id),
    };
  }
});

export const authConfig: NextAuthConfig = {
  adapter: DrizzleAdapter(db),
  providers: providers,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    async redirect() {
      return "/dashboard";
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
