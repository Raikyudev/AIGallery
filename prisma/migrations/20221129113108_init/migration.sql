/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Customers` ADD COLUMN `role` VARCHAR(20) NOT NULL DEFAULT 'USER',
    ADD COLUMN `username` VARCHAR(40) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Customers_username_key` ON `Customers`(`username`);
