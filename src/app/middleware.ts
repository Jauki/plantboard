import { withAuth } from 'next-auth/middleware';

// Middleware for deteciting if a User is authorized to access any page
export default withAuth({
  pages: {
    signIn: '/signup',
    error: '/error',
  },
});
