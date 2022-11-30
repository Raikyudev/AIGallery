/*
  Warnings:

  - You are about to drop the column `customerID` on the `OrderItems` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `OrderItems` DROP COLUMN `customerID`;

-- CreateIndex
CREATE INDEX `OrderItems_productId_fkey` ON `OrderItems`(`productId`);
