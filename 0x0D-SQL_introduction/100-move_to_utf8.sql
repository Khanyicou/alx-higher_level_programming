-- Converts encoding to UTF8
-- DDL query to encoding hbtn_0c_0, first table, and name to UTF8
USE `hbtn_0c_0`
ALTER TABLE `first_table`
CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
