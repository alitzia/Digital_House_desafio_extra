DROP DATABASE IF EXISTS musicando;
CREATE DATABASE musicando;
USE musicando;

--
-- Table structure for table `generos `
--

DROP TABLE IF EXISTS `generos`;
CREATE TABLE `generos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
INSERT INTO `generos` VALUES (1,'Rock'),(2,'Pop'),(3,'Metal'),(4,'Alternative'),(5,'Latin'),(6,'Clasic');
UNLOCK TABLES;

--
-- Table structure for table `artistas`
--

DROP TABLE IF EXISTS `artistas`;
CREATE TABLE `artistas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8_unicode_ci NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `artistas `
--

LOCK TABLES `artistas` WRITE;
INSERT INTO `artistas` VALUES (1,'Madonna',''),(2,'Michael', 'Jackson'),(3,'Coldplay',''),(4,'Rolling Stones',''),
(5,'The Beatles', ''),(6,'Led Zeppelin',''), (6,'The Cure','');
UNLOCK TABLES;

--
-- Table structure for table `albumes`
--

DROP TABLE IF EXISTS `albumes`;
CREATE TABLE `albumes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `duracion` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `albumes `
--

LOCK TABLES `albumes` WRITE;
INSERT INTO `albumes` VALUES (1,'Like a virgin', 28),(2,'Like a Prayer', 32),(3,'Thriller', 42), (4, 'Bad', 45), 
(5, 'A Rush of Blood to the Head', 32), (6, 'A Head Full of Dreams', 37), (7, 'Led Zeppelin IV', 45)
(8, 'A Hard Days Night', 38), (9, 'Their Satanic Majesties Request', 40), (10, 'Boys Dont Cry', 42);
UNLOCK TABLES;

--
-- Table structure for table `canciones`
--

DROP TABLE IF EXISTS `canciones`;
CREATE TABLE `canciones` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `titulo` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
	`duracion` int(10) unsigned DEFAULT NULL,
  `genero_id` int(10) unsigned DEFAULT NULL,
  `album_id` int(10) unsigned DEFAULT NULL,
  `artista_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `canciones_genero_id_foreign` (`genero_id`),
  CONSTRAINT `canciones_genero_id_foreign` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`),

  KEY `canciones_album_id_foreign` (`album_id`),
  CONSTRAINT `canciones_album_id_foreign` FOREIGN KEY (`album_id`) REFERENCES `albumes` (`id`),

  KEY `canciones_artista_id_foreign` (`artista_id`),
  CONSTRAINT `canciones_artista_id_foreign` FOREIGN KEY (`artista_id`) REFERENCES `artistas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `canciones `
--

LOCK TABLES `canciones` WRITE;
INSERT INTO `canciones` VALUES 
(1,'2021-11-18 00:00:00','2021-11-18 00:00:00','Angel',4,2,1,1),
(2,'2021-11-18 00:00:00','2021-11-18 00:00:00','Material Girl',4,2,1,1),
(3,'2021-11-18 00:00:00','2021-11-18 00:00:00','Like a Virgin',3,2,1,1),
(4,'2021-11-18 00:00:00','2021-11-18 00:00:00','Over and Over',5,2,1,1),
(5,'2021-11-18 00:00:00','2021-11-18 00:00:00','Like a Prayer',6,2,1,1),
(6,'2021-11-18 00:00:00','2021-11-18 00:00:00','Express Yourself',5,2,1,1),
(23	'2021-11-20 20:02:02','2021-11-20 20:30:21','Clocks',4,2,5,3),
(24,'2021-11-20 20:33:42','2021-11-20 20:34:43','Yellow',2,2,5,3),
(25,'2021-11-21 09:16:56','2021-11-21 09:16:56','Stairway to heaven',8,1,7,6),
(26,'2021-11-21 09:17:43','2021-11-21 09:17:43','Boys Dont Cry',3,1,10,7),
(27,'2021-11-21 09:18:33','2021-11-21 09:18:33','She is a rainbow',3,1,9,4),
(28,'2021-11-21 09:20:07','2021-11-21 09:20:07','Sing This All Together',4,1,9,4),
(29,'2021-11-21 09:21:15','2021-11-21 09:21:15','A Hard Days Night',4,1,8,5),
(30,'2021-11-21 09:21:52','2021-11-21 09:21:52','And I Love Her',3,1,8,5),
(31,'2021-11-21 15:18:09','2021-11-21 15:18:09','Black dog',4,1,7,6);
UNLOCK TABLES;