/*
  Warnings:

  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `followingCount` on the `Customer` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - The primary key for the `Following` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customerId` on the `Following` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `Following` table. All the data in the column will be lost.
  - The primary key for the `Rating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `count` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `store_id` on the `Rating` table. All the data in the column will be lost.
  - The primary key for the `Store` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Store` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `postCount` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - A unique constraint covering the columns `[user_id]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customer_id]` on the table `Following` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[store_id]` on the table `Following` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[avatar_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `following_count` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_id` to the `Following` table without a default value. This is not possible if the table is not empty.
  - Added the required column `store_id` to the `Following` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Rating` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `user_id` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `craete_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Customer` DROP FOREIGN KEY `Customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `Following` DROP FOREIGN KEY `Following_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `Following` DROP FOREIGN KEY `Following_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `Rating` DROP FOREIGN KEY `Rating_store_id_fkey`;

-- DropForeignKey
ALTER TABLE `Store` DROP FOREIGN KEY `Store_id_fkey`;

-- DropIndex
DROP INDEX `id` ON `User`;

-- AlterTable
ALTER TABLE `Customer` DROP PRIMARY KEY,
    DROP COLUMN `followingCount`,
    ADD COLUMN `following_count` INTEGER NOT NULL,
    ADD COLUMN `user_id` VARCHAR(36) NOT NULL,
    MODIFY `id` VARCHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Following` DROP PRIMARY KEY,
    DROP COLUMN `customerId`,
    DROP COLUMN `storeId`,
    ADD COLUMN `customer_id` VARCHAR(36) NOT NULL,
    ADD COLUMN `store_id` VARCHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE `Rating` DROP PRIMARY KEY,
    DROP COLUMN `count`,
    DROP COLUMN `store_id`,
    ADD COLUMN `id` VARCHAR(36) NOT NULL,
    MODIFY `general` FLOAT NOT NULL DEFAULT 0,
    MODIFY `environment` FLOAT NOT NULL DEFAULT 0,
    MODIFY `meals` FLOAT NOT NULL DEFAULT 0,
    MODIFY `attitude` FLOAT NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Store` DROP PRIMARY KEY,
    ADD COLUMN `user_id` VARCHAR(36) NOT NULL,
    MODIFY `id` VARCHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `postCount`,
    ADD COLUMN `avatar_id` VARCHAR(36) NOT NULL,
    ADD COLUMN `craete_at` TIMESTAMP NOT NULL,
    ADD COLUMN `post_count` INTEGER NOT NULL DEFAULT 0,
    MODIFY `id` VARCHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `StoreRating` (
    `store_id` VARCHAR(36) NOT NULL,
    `rating_id` VARCHAR(36) NOT NULL,
    `post_count` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `StoreRating_store_id_key`(`store_id`),
    UNIQUE INDEX `StoreRating_rating_id_key`(`rating_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Picture` (
    `id` VARCHAR(36) NOT NULL,
    `data` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostPicture` (
    `postId` VARCHAR(36) NOT NULL,
    `picture_id` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `PostPicture_postId_key`(`postId`),
    UNIQUE INDEX `PostPicture_picture_id_key`(`picture_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(36) NOT NULL,
    `user_id` VARCHAR(36) NOT NULL,
    `body` TEXT NOT NULL,
    `post_at` TIMESTAMP NOT NULL,
    `update_at` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerPost` (
    `id` VARCHAR(36) NOT NULL,
    `postId` VARCHAR(36) NOT NULL,
    `ratingId` VARCHAR(36) NOT NULL,
    `storeId` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `CustomerPost_postId_key`(`postId`),
    UNIQUE INDEX `CustomerPost_ratingId_key`(`ratingId`),
    UNIQUE INDEX `CustomerPost_storeId_key`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StorePost` (
    `id` VARCHAR(36) NOT NULL,
    `postId` VARCHAR(36) NOT NULL,
    `title` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `StorePost_postId_key`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Customer_user_id_key` ON `Customer`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Following_customer_id_key` ON `Following`(`customer_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Following_store_id_key` ON `Following`(`store_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Store_user_id_key` ON `Store`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_avatar_id_key` ON `User`(`avatar_id`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_avatar_id_fkey` FOREIGN KEY (`avatar_id`) REFERENCES `Picture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Following` ADD CONSTRAINT `Following_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Following` ADD CONSTRAINT `Following_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoreRating` ADD CONSTRAINT `StoreRating_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoreRating` ADD CONSTRAINT `StoreRating_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `Rating`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostPicture` ADD CONSTRAINT `PostPicture_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostPicture` ADD CONSTRAINT `PostPicture_picture_id_fkey` FOREIGN KEY (`picture_id`) REFERENCES `Picture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_ratingId_fkey` FOREIGN KEY (`ratingId`) REFERENCES `Rating`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StorePost` ADD CONSTRAINT `StorePost_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
