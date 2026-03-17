import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST() {
  const user = await prisma.user.create({
    data: {
      name: "Ninestarx",
      email: "test@test.com",
    },
  });

  return Response.json(user);
}