CREATE DATABASE  IF NOT EXISTS `quiz` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `quiz`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: quiz
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `quiz_data`
--

DROP TABLE IF EXISTS `quiz_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz_data` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `difficulty` varchar(45) NOT NULL,
  `sub` varchar(45) NOT NULL,
  `chapter` varchar(45) NOT NULL,
  `section` varchar(45) NOT NULL,
  `question` varchar(100) NOT NULL,
  `option1` varchar(45) NOT NULL,
  `option2` varchar(45) NOT NULL,
  `option3` varchar(45) NOT NULL,
  `option4` varchar(45) NOT NULL,
  `answer` varchar(45) NOT NULL,
  `explanation` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz_data`
--

LOCK TABLES `quiz_data` WRITE;
/*!40000 ALTER TABLE `quiz_data` DISABLE KEYS */;
INSERT INTO `quiz_data` VALUES (4,'easy','f234f34fg','34g34g','43g34g','34g34','g43g','34g43','g34g3','4g34g','g34g3','34g43g'),(8,'medium','f234f34fg','34g34g','43g34g','34g34g34g34','34g34g34g4\n','g345r\n','g34g3\n','4g34g\n','g345r','34g43g'),(19,'easy','f234f34fg','34g34g','43g34g','345g354g45g45','g45gh45','h45h4','5h4th','456th456t','5h4th','h456th456'),(21,'medium','f234f34fg','34g34g','43g34g','23r34t35t534gt54','gt45g45','g45g45g','534g45g','45g45g','534g45g','45g45g45g54'),(22,'easy','f234f34fg','65e6i5e56','k76erkrk','i75e757i5','rbtybnty\n','ntyn\n','tyntyntyn\n','tynytnytnytnytn\n','ntyn','tynbytbnyt');
/*!40000 ALTER TABLE `quiz_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-07 10:34:48
