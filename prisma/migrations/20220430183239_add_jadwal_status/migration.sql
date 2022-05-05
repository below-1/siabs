-- CreateEnum
CREATE TYPE "JadwalStatus" AS ENUM ('Draft', 'Published');

-- AlterTable
ALTER TABLE "Jadwal" ADD COLUMN     "status" "JadwalStatus" NOT NULL DEFAULT E'Draft';
