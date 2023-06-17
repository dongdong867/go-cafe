/*
  Warnings:

  - A unique constraint covering the columns `[id,storeId]` on the table `StorePost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `StorePost_id_storeId_key` ON `StorePost`(`id`, `storeId`);
