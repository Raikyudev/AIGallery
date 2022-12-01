-- CreateTable
CREATE TABLE `Products` (
    `productID` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(50) NOT NULL,
    `productPrice` DOUBLE NOT NULL,
    `productSize` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`productID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customers` (
    `customerID` INTEGER NOT NULL AUTO_INCREMENT,
    `customerLastName` VARCHAR(50) NOT NULL,
    `customerFirstName` VARCHAR(50) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(300) NOT NULL,
    `role` VARCHAR(20) NOT NULL DEFAULT 'USER',
    `username` VARCHAR(40) NOT NULL,

    UNIQUE INDEX `Customers_customerLastName_key`(`customerLastName`),
    UNIQUE INDEX `Customers_email_key`(`email`),
    UNIQUE INDEX `Customers_username_key`(`username`),
    PRIMARY KEY (`customerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `orderID` INTEGER NOT NULL AUTO_INCREMENT,
    `customerID` INTEGER NOT NULL,
    `orderDate` DATETIME(3) NOT NULL DEFAULT '2021-01-01 02:07:14.000',
    `paymentDate` DATETIME(3) NOT NULL DEFAULT '2021-01-01 02:07:14.000',
    `hasCheckedOut` BOOLEAN NOT NULL DEFAULT false,

    INDEX `Orders_customerID_fkey`(`customerID`),
    PRIMARY KEY (`orderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItems` (
    `orderItemID` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `orderID` INTEGER NOT NULL,

    INDEX `OrderItems_orderID_fkey`(`orderID`),
    PRIMARY KEY (`orderItemID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_customerID_fkey` FOREIGN KEY (`customerID`) REFERENCES `Customers`(`customerID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_orderID_fkey` FOREIGN KEY (`orderID`) REFERENCES `Orders`(`orderID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`productID`) ON DELETE RESTRICT ON UPDATE CASCADE;
