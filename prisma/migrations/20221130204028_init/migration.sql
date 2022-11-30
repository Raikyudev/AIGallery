/*
  Warnings:

  - You are about to alter the column `phoneNumber` on the `Customers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `Int`.
  - A unique constraint covering the columns `[email]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Customers` MODIFY `phoneNumber` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Customers_email_key` ON `Customers`(`email`);
