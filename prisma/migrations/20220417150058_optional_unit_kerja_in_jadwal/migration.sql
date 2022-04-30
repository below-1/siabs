-- DropForeignKey
ALTER TABLE "Jadwal" DROP CONSTRAINT "Jadwal_unitKerjaId_fkey";

-- AlterTable
ALTER TABLE "Jadwal" ALTER COLUMN "unitKerjaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Jadwal" ADD CONSTRAINT "Jadwal_unitKerjaId_fkey" FOREIGN KEY ("unitKerjaId") REFERENCES "UnitKerja"("id") ON DELETE SET NULL ON UPDATE CASCADE;
