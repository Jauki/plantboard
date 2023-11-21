-- DropForeignKey
ALTER TABLE "Plant" DROP CONSTRAINT "Plant_wishlistId_fkey";

-- AlterTable
ALTER TABLE "Plant" ALTER COLUMN "isOnWishlist" DROP NOT NULL,
ALTER COLUMN "wishlistId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
