/*
  Warnings:

  - You are about to drop the column `orderID` on the `orderitems` table. All the data in the column will be lost.
  - You are about to drop the column `productDescription` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `customers` ADD COLUMN `password` VARCHAR(300) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `orderitems` DROP COLUMN `orderID`,
    ADD COLUMN `customerID` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `productDescription`;
