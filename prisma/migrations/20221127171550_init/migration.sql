/*
  Warnings:

  - Added the required column `size` to the `OrderItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orderitems` ADD COLUMN `size` VARCHAR(20) NOT NULL;
