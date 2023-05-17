/*
  Warnings:

  - You are about to drop the column `postId` on the `CustomerPost` table. All the data in the column will be lost.
  - You are about to drop the column `ratingId` on the `CustomerPost` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `CustomerPost` table. All the data in the column will be lost.
  - You are about to alter the column `post_at` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `update_at` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `postId` on the `PostPicture` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `StorePost` table. All the data in the column will be lost.
  - You are about to alter the column `craete_at` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - A unique constraint covering the columns `[post_id]` on the table `CustomerPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rating_id]` on the table `CustomerPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[store_id]` on the table `CustomerPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[post_id]` on the table `PostPicture` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[post_id]` on the table `StorePost` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `post_id` to the `CustomerPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating_id` to the `CustomerPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `store_id` to the `CustomerPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `PostPicture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `StorePost` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CustomerPost` DROP FOREIGN KEY `CustomerPost_postId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerPost` DROP FOREIGN KEY `CustomerPost_ratingId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerPost` DROP FOREIGN KEY `CustomerPost_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `PostPicture` DROP FOREIGN KEY `PostPicture_postId_fkey`;

-- DropForeignKey
ALTER TABLE `StorePost` DROP FOREIGN KEY `StorePost_postId_fkey`;

-- AlterTable
ALTER TABLE `CustomerPost` DROP COLUMN `postId`,
    DROP COLUMN `ratingId`,
    DROP COLUMN `storeId`,
    ADD COLUMN `post_id` VARCHAR(36) NOT NULL,
    ADD COLUMN `rating_id` VARCHAR(36) NOT NULL,
    ADD COLUMN `store_id` VARCHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE `Post` MODIFY `post_at` TIMESTAMP NOT NULL,
    MODIFY `update_at` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `PostPicture` DROP COLUMN `postId`,
    ADD COLUMN `post_id` VARCHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE `StorePost` DROP COLUMN `postId`,
    ADD COLUMN `post_id` VARCHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `craete_at` TIMESTAMP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `CustomerPost_post_id_key` ON `CustomerPost`(`post_id`);

-- CreateIndex
CREATE UNIQUE INDEX `CustomerPost_rating_id_key` ON `CustomerPost`(`rating_id`);

-- CreateIndex
CREATE UNIQUE INDEX `CustomerPost_store_id_key` ON `CustomerPost`(`store_id`);

-- CreateIndex
CREATE UNIQUE INDEX `PostPicture_post_id_key` ON `PostPicture`(`post_id`);

-- CreateIndex
CREATE UNIQUE INDEX `StorePost_post_id_key` ON `StorePost`(`post_id`);

-- AddForeignKey
ALTER TABLE `PostPicture` ADD CONSTRAINT `PostPicture_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `Rating`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StorePost` ADD CONSTRAINT `StorePost_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
