/*
  Warnings:

  - A unique constraint covering the columns `[id,customer_id]` on the table `CustomerPost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `CustomerPost_id_customer_id_key` ON `CustomerPost`(`id`, `customer_id`);
