-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(36) NOT NULL,
    `account` VARCHAR(30) NOT NULL,
    `password` TINYTEXT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `phone` CHAR(10) NOT NULL,
    `avatar_id` VARCHAR(36) NOT NULL,
    `craete_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `post_count` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `User_account_key`(`account`),
    UNIQUE INDEX `User_phone_key`(`phone`),
    UNIQUE INDEX `User_avatar_id_key`(`avatar_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `id` VARCHAR(36) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `following_count` INTEGER NOT NULL DEFAULT 0,
    `user_id` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `Customer_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Store` (
    `id` VARCHAR(36) NOT NULL,
    `address` VARCHAR(50) NOT NULL,
    `info` TINYTEXT NOT NULL,
    `user_id` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `Store_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Following` (
    `customer_id` VARCHAR(36) NOT NULL,
    `store_id` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `Following_customer_id_store_id_key`(`customer_id`, `store_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rating` (
    `general` FLOAT NOT NULL DEFAULT 0,
    `environment` FLOAT NOT NULL DEFAULT 0,
    `meals` FLOAT NOT NULL DEFAULT 0,
    `attitude` FLOAT NOT NULL DEFAULT 0,
    `id` VARCHAR(36) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `picture_id` VARCHAR(36) NOT NULL,
    `post_id` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `PostPicture_picture_id_post_id_key`(`picture_id`, `post_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(36) NOT NULL,
    `body` TEXT NOT NULL,
    `post_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerPost` (
    `id` VARCHAR(36) NOT NULL,
    `post_id` VARCHAR(36) NOT NULL,
    `rating_id` VARCHAR(36) NOT NULL,
    `customerId` VARCHAR(36) NOT NULL,
    `store_id` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `CustomerPost_post_id_key`(`post_id`),
    UNIQUE INDEX `CustomerPost_rating_id_key`(`rating_id`),
    UNIQUE INDEX `CustomerPost_store_id_key`(`store_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StorePost` (
    `id` VARCHAR(36) NOT NULL,
    `title` VARCHAR(20) NOT NULL,
    `post_id` VARCHAR(36) NOT NULL,
    `storeId` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `StorePost_post_id_key`(`post_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
ALTER TABLE `StoreRating` ADD CONSTRAINT `StoreRating_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `Rating`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoreRating` ADD CONSTRAINT `StoreRating_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostPicture` ADD CONSTRAINT `PostPicture_picture_id_fkey` FOREIGN KEY (`picture_id`) REFERENCES `Picture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostPicture` ADD CONSTRAINT `PostPicture_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `Rating`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerPost` ADD CONSTRAINT `CustomerPost_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StorePost` ADD CONSTRAINT `StorePost_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StorePost` ADD CONSTRAINT `StorePost_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
