import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { AuthOptions, Session, User } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import prisma from '../../../../../prisma/client';

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
