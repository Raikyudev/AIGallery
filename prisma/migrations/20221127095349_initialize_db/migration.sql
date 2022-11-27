-- CreateTable
CREATE TABLE `Products` (
    `productID` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(50) NOT NULL,
    `productDescription` VARCHAR(100) NOT NULL,
    `productPrice` DOUBLE NOT NULL,
    `productSize` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`productID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customers` (
    `customerID` INTEGER NOT NULL AUTO_INCREMENT,
    `customerLastName` VARCHAR(50) NOT NULL,
    `customerFirstName` VARCHAR(50) NOT NULL,
    `phoneNumber` VARCHAR(20) NOT NULL,
    `email` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `Customers_customerLastName_key`(`customerLastName`),
    PRIMARY KEY (`customerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `orderID` INTEGER NOT NULL AUTO_INCREMENT,
    `customerID` INTEGER NOT NULL,
    `OrderDate` DATETIME(3) NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`orderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItems` (
    `orderItemID` INTEGER NOT NULL AUTO_INCREMENT,
    `orderID` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `quantity` DOUBLE NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`orderItemID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
