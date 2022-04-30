/*
  Warnings:

  - You are about to drop the column `hari` on the `Absen` table. All the data in the column will be lost.
  - You are about to drop the column `jadwalId` on the `Absen` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Absen` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Absen` table. All the data in the column will be lost.
  - The `waktu` column on the `Absen` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `closed` on the `Jadwal` table. All the data in the column will be lost.
  - You are about to drop the column `dl_latitude` on the `Jadwal` table. All the data in the column will be lost.
  - You are about to drop the column `dl_longitude` on the `Jadwal` table. All the data in the column will be lost.
  - You are about to drop the column `dl_nama` on the `Jadwal` table. All the data in the column will be lost.
  - You are about to drop the column `pegawaiId` on the `Jadwal` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Jadwal` table. All the data in the column will be lost.
  - You are about to drop the column `isAdminUnitKerja` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `unitKerjaId` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `isSuperAdmin` on the `User` table. All the data in the column will be lost.
  - Added the required column `pegawaiId` to the `Absen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workStatus` to the `Absen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Jadwal` table without a default value. This is not possible if the table is not empty.
  - Made the column `unitKerjaId` on table `Jadwal` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `superUser` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "WorkStatus" AS ENUM ('WorkFromHome', 'WorkFromOffice', 'DinasLuar');

-- CreateEnum
CREATE TYPE "JadwalType" AS ENUM ('Masuk', 'Keluar');

-- DropForeignKey
ALTER TABLE "Absen" DROP CONSTRAINT "Absen_jadwalId_fkey";

-- DropForeignKey
ALTER TABLE "Jadwal" DROP CONSTRAINT "Jadwal_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Jadwal" DROP CONSTRAINT "Jadwal_pegawaiId_fkey";

-- DropForeignKey
ALTER TABLE "Jadwal" DROP CONSTRAINT "Jadwal_unitKerjaId_fkey";

-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_unitKerjaId_fkey";

-- DropIndex
DROP INDEX "Absen_jadwalId_key";

-- AlterTable
ALTER TABLE "Absen" DROP COLUMN "hari",
DROP COLUMN "jadwalId",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "pegawaiId" INTEGER NOT NULL,
ADD COLUMN     "workStatus" "WorkStatus" NOT NULL,
DROP COLUMN "waktu",
ADD COLUMN     "waktu" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Jadwal" DROP COLUMN "closed",
DROP COLUMN "dl_latitude",
DROP COLUMN "dl_longitude",
DROP COLUMN "dl_nama",
DROP COLUMN "pegawaiId",
DROP COLUMN "status",
ADD COLUMN     "type" "JadwalType" NOT NULL,
ALTER COLUMN "unitKerjaId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Pegawai" DROP COLUMN "isAdminUnitKerja",
DROP COLUMN "unitKerjaId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isSuperAdmin",
ADD COLUMN     "superUser" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "StatusKerja";

-- CreateTable
CREATE TABLE "_UnitKerjaToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UnitKerjaToUser_AB_unique" ON "_UnitKerjaToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_UnitKerjaToUser_B_index" ON "_UnitKerjaToUser"("B");

-- AddForeignKey
ALTER TABLE "Jadwal" ADD CONSTRAINT "Jadwal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jadwal" ADD CONSTRAINT "Jadwal_unitKerjaId_fkey" FOREIGN KEY ("unitKerjaId") REFERENCES "UnitKerja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absen" ADD CONSTRAINT "Absen_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UnitKerjaToUser" ADD FOREIGN KEY ("A") REFERENCES "UnitKerja"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UnitKerjaToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
