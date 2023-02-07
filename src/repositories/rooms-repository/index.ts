import { prisma } from "@/config";
  
async function findRoomsById(roomId: number) {
  return prisma.room.findFirst({
    where: {
      id: roomId,
    },
  });
}
  
const roomsRepository = {
  findRoomsById,
};
  
export default roomsRepository;
