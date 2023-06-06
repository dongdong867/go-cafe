-- AlterTable
ALTER TABLE `Customer` MODIFY `email` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `Picture` MODIFY `data` TINYTEXT NOT NULL;

-- AlterTable
ALTER TABLE `Store` MODIFY `info` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `StorePost` MODIFY `title` TINYTEXT NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `password` TEXT NOT NULL;
