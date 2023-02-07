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

const bookingsRepository = {
  findBookingByUserId
};

export default bookingsRepository;
