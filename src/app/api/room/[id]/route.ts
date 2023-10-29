import { NextRequest } from 'next/server';
import { useParams, useSearchParams } from 'next/navigation';
import prisma from '../../../../../prisma/client';
import { getServerSession } from 'next-auth';

/**
 * Get destinct Room by id
 * @param request
 * @param param1
 * @returns
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // I don't need to actually verify, bc middleware should do this!
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });
  console.log(user);
  return new Response('hrllo');
}
