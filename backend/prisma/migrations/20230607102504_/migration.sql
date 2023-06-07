/*
  Warnings:

  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Picture` MODIFY `data` VARCHAR(89) NOT NULL;

-- AlterTable
ALTER TABLE `Store` MODIFY `address` TINYTEXT NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `salt` CHAR(32) NOT NULL,
    MODIFY `password` CHAR(128) NOT NULL;
