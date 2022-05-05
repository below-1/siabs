/*
  Warnings:

  - Added the required column `jadwalId` to the `Absen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Absen" ADD COLUMN     "jadwalId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Absen" ADD CONSTRAINT "Absen_jadwalId_fkey" FOREIGN KEY ("jadwalId") REFERENCES "Jadwal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
