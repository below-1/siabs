/*
  Warnings:

  - You are about to drop the column `type` on the `Jadwal` table. All the data in the column will be lost.
  - Added the required column `type` to the `Absen` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AbsenType" AS ENUM ('Masuk', 'Keluar');

-- AlterTable
ALTER TABLE "Absen" ADD COLUMN     "type" "AbsenType" NOT NULL;

-- AlterTable
ALTER TABLE "Jadwal" DROP COLUMN "type";

-- DropEnum
DROP TYPE "JadwalType";
