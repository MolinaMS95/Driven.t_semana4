import bookingsRepository from "@/repositories/bookings-repository";
import { notFoundError } from "@/errors";

async function findBooking(userId: number) {
  const booking = await bookingsRepository.findBookingByUserId(userId);
  if(!booking) throw notFoundError();
  return booking;
}

const bookingsService = {
  findBooking
};

export default bookingsService;
