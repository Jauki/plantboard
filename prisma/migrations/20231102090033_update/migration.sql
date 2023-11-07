/*
  Warnings:

  - You are about to drop the column `isOutdoor` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Room` table. All the data in the column will be lost.
  - Added the required column `isOnWishlist` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wishlistId` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomColor` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomLocation` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomName` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomSize` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('OUTDOOR', 'INDOOR');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('S', 'M', 'L');

-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "author" TEXT,
ADD COLUMN     "bibliography" TEXT,
ADD COLUMN     "family" TEXT,
ADD COLUMN     "familyCommonName" TEXT,
ADD COLUMN     "genus" TEXT,
ADD COLUMN     "genusId" INTEGER,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "isOnWishlist" BOOLEAN NOT NULL,
ADD COLUMN     "rank" TEXT,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "synonyms" TEXT[],
ADD COLUMN     "wishlistId" INTEGER NOT NULL,
ADD COLUMN     "year" INTEGER;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "isOutdoor",
DROP COLUMN "name",
ADD COLUMN     "roomColor" TEXT NOT NULL,
ADD COLUMN     "roomLocation" "LocationType" NOT NULL,
ADD COLUMN     "roomName" TEXT NOT NULL,
ADD COLUMN     "roomSize" "Size" NOT NULL;

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wishlist_userId_key" ON "Wishlist"("userId");

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
