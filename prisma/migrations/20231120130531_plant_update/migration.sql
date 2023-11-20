-- CreateEnum
CREATE TYPE "Sunlight" AS ENUM ('Sunlight', 'Shade', 'GrowBox', 'HalfShade');

-- CreateEnum
CREATE TYPE "WaterFrequency" AS ENUM ('light', 'moderate', 'frequent', 'abundant');

-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "height" INTEGER,
ADD COLUMN     "sunlight" "Sunlight",
ADD COLUMN     "waterFrequency" "WaterFrequency";
