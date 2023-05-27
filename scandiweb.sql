/*
 Navicat Premium Data Transfer

 Source Server         : home-server
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : scandiweb

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 05/04/2022 00:10:51
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of product
-- ----------------------------
BEGIN;
INSERT INTO `product` VALUES (1, '983', 'new 1', '2093', '1');
INSERT INTO `product` VALUES (2, '983', 'new 2', '92', '3');
INSERT INTO `product` VALUES (3, '90812', 'new 3', '1239', '2');
INSERT INTO `product` VALUES (4, '98238', 'new 1', '928', '1');
INSERT INTO `product` VALUES (5, '9287', 'test 1', '92824', '2');
COMMIT;

-- ----------------------------
-- Table structure for product_type
-- ----------------------------
DROP TABLE IF EXISTS `product_type`;
CREATE TABLE `product_type` (
  `product_id` int NOT NULL,
  `value` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of product_type
-- ----------------------------
BEGIN;
INSERT INTO `product_type` VALUES (1, '{\"size\": \"42\", \"description\": \"nothing\"}');
INSERT INTO `product_type` VALUES (2, '{\"weight\": \"29\", \"description\": \"nothing\"}');
INSERT INTO `product_type` VALUES (3, '{\"width\": \"29\", \"height\": \"39\", \"lenght\": \"12\", \"description\": \"nothing\"}');
INSERT INTO `product_type` VALUES (4, '{\"size\": \"29\", \"description\": \"nothing\"}');
INSERT INTO `product_type` VALUES (5, '{\"width\": \"29\", \"height\": \"28\", \"lenght\": \"21\", \"description\": \"nothing else\"}');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
