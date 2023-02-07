import bookingsRepository from "@/repositories/bookings-repository";
import { notFoundError } from "@/errors";
import hotelService from "../hotels-service";
import roomsRepository from "@/repositories/rooms-repository";
import { cannotBookError } from "@/errors/cannot-book-error";

async function findBooking(userId: number) {
  const booking = await bookingsRepository.findBookingByUserId(userId);
  if(!booking) throw notFoundError();
  return booking;
}

async function createBooking(userId: number, roomId: number) {
  await hotelService.listHotels(userId);

  const room = await roomsRepository.findRoomsById(roomId);
  if(!room) throw notFoundError();

  const roomBookings = await bookingsRepository.countBookings(roomId);
  if(room.capacity === roomBookings) throw cannotBookError();

  const booking = await bookingsRepository.insertBooking(userId, roomId);
  return booking.id;
}

const bookingsService = {
  findBooking,
  createBooking,
};

export default bookingsService;
