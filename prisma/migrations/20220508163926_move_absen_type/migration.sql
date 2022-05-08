/*
  Warnings:

  - You are about to drop the column `type` on the `Absen` table. All the data in the column will be lost.
  - Added the required column `type` to the `Jadwal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Absen" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Jadwal" ADD COLUMN     "type" "AbsenType" NOT NULL default 'Masuk';
