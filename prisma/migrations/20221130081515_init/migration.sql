/*
  Warnings:

  - You are about to drop the column `OrderDate` on the `Orders` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `OrderItems` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `OrderItems` ALTER COLUMN `customerID` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Orders` DROP COLUMN `OrderDate`,
    ADD COLUMN `orderDate` DATETIME(3) NOT NULL DEFAULT '2021-01-01 02:07:14.000';

-- CreateIndex
CREATE UNIQUE INDEX `OrderItems_productId_key` ON `OrderItems`(`productId`);
