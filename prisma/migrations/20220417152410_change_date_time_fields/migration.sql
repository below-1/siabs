/*
  Warnings:

  - You are about to drop the column `jam` on the `Jadwal` table. All the data in the column will be lost.
  - Added the required column `hari` to the `Jadwal` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `waktu` on the `Jadwal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Jadwal" DROP COLUMN "jam",
ADD COLUMN     "hari" DATE NOT NULL,
DROP COLUMN "waktu",
ADD COLUMN     "waktu" TIME NOT NULL;
