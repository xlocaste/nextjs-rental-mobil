-- CreateTable
CREATE TABLE `mobil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(255) NOT NULL,
    `merk` VARCHAR(191) NULL,
    `harga` VARCHAR(191) NULL,
    `kursi` VARCHAR(191) NULL,
    `bahan_bakar` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
