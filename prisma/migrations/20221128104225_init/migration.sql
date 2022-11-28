/*
  Warnings:

  - You are about to drop the column `orderID` on the `OrderItems` table. All the data in the column will be lost.
  - You are about to drop the column `productDescription` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Customers` ADD COLUMN `password` VARCHAR(300) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `OrderItems` DROP COLUMN `orderID`,
    ADD COLUMN `customerID` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Products` DROP COLUMN `productDescription`;
