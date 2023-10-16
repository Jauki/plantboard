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
  const session = await getServerSession();
  console.log(session);
  const user = await prisma.user.findUnique({
    where: { id: 'fo' },
    include: {
      Room: true,
    },
  });
  return new Response('Hello world!');
}
