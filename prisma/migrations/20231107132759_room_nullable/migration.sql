-- DropForeignKey
ALTER TABLE "Plant" DROP CONSTRAINT "Plant_roomId_fkey";

-- AlterTable
ALTER TABLE "Plant" ALTER COLUMN "roomId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
