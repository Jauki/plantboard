import prisma from '../../../../prisma/client';
import { auth } from '@/auth';

/**
 * Gets the rooms of a person
 * @param request
 * @param param1
 * @returns
 */
export async function GET() {
  // I don't need to actually verify, bc middleware should do this!
  try {
    const session = await auth();
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! },
      include: {
        rooms: {
          include: {
            plants: true,
          },
        },
      },
    });

    return user?.rooms
      ? new Response(JSON.stringify(user.rooms))
      : new Response('No rooms', { status: 404 });
  } catch (e) {
    // todo: not so sure about this, concerning my Middleware
    // as now i want to reject the user by simply not letting do api fetches -> maybe a matcher on /api
    return new Response('Unauthenticated', { status: 401 });
  }
}
