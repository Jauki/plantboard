import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import prisma from "../../../../prisma/client"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
}

export default NextAuth(authOptions)