import { prisma } from "@/config";

async function findBookingByUserId(userId: number) {
  return prisma.booking.findFirst({
    where: {
      userId
    },
    select: {
      id: true,
      Room: true
    },
  });
}

async function countBookings(roomId: number) {
  return prisma.booking.count({
    where: {
      roomId
    }
  });
}

async function insertBooking(userId: number, roomId: number) {
  return prisma.booking.create({
    data: {
      userId,
      roomId,
    }
  });
}

const bookingsRepository = {
  findBookingByUserId,
  countBookings,
  insertBooking,
};

export default bookingsRepository;
