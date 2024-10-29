/*
  Warnings:

  - You are about to alter the column `harga` on the `mobil` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `mobil` MODIFY `harga` DECIMAL(65, 30) NULL;
