import { prisma } from "@/config";
import faker from "@faker-js/faker";

export async function createBooking(userId: number, roomId: number) {
  return await prisma.booking.create({
    data: {
      userId,
      roomId
    }
  });
}

export async function createManyBookings(userId: number, roomId: number) {
  return await prisma.booking.createMany({
    data: [
      {
        userId,
        roomId
      },
      {
        userId,
        roomId
      },
      {
        userId,
        roomId
      }
    ]
  });
}
