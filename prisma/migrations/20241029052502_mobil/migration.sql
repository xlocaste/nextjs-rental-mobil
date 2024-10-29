/*
  Warnings:

  - You are about to alter the column `harga` on the `mobil` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `mobil` MODIFY `harga` DECIMAL(10, 2) NULL;
