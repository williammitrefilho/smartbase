-- MySQL dump 10.13  Distrib 5.6.16, for Win32 (x86)
--
-- Host: localhost    Database: smart6
-- ------------------------------------------------------
-- Server version	5.6.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `paginas`
--

DROP TABLE IF EXISTS `paginas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paginas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `link` varchar(70) NOT NULL,
  `texto` varchar(2000) DEFAULT NULL,
  `ordem` smallint(5) unsigned NOT NULL,
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `permissao` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paginas`
--

LOCK TABLES `paginas` WRITE;
/*!40000 ALTER TABLE `paginas` DISABLE KEYS */;
INSERT INTO `paginas` VALUES (1,'Index','index/index',NULL,1,1,17);
/*!40000 ALTER TABLE `paginas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessoes`
--

DROP TABLE IF EXISTS `sessoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessoes` (
  `id` varchar(40) NOT NULL,
  `usuario` int(10) unsigned NOT NULL,
  `data_ini` datetime NOT NULL,
  `permissao` smallint(5) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessoes`
--

LOCK TABLES `sessoes` WRITE;
/*!40000 ALTER TABLE `sessoes` DISABLE KEYS */;
INSERT INTO `sessoes` VALUES ('1a3722a53d78fe35d76687a9afa16345',1,'2016-03-29 04:29:14',0);
/*!40000 ALTER TABLE `sessoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `rg` varchar(15) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `email` varchar(70) NOT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `cpf` varchar(15) DEFAULT NULL,
  `senha` varchar(40) NOT NULL,
  `permissao` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'William','Mitre Filho','46043423','11994472634','william@smartconstrucoes.eng.br',NULL,'38506227895','03f80ccdd1b6461e2271476ac07fbf64',17);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_paginas`
--

DROP TABLE IF EXISTS `usuarios_paginas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_paginas` (
  `usuario` int(10) unsigned NOT NULL,
  `pagina` int(10) unsigned NOT NULL,
  UNIQUE KEY `usuario` (`usuario`,`pagina`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_paginas`
--

LOCK TABLES `usuarios_paginas` WRITE;
/*!40000 ALTER TABLE `usuarios_paginas` DISABLE KEYS */;
INSERT INTO `usuarios_paginas` VALUES (1,1);
/*!40000 ALTER TABLE `usuarios_paginas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vars_sessao`
--

DROP TABLE IF EXISTS `vars_sessao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vars_sessao` (
  `id_sessao` varchar(40) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `valor` varchar(30) NOT NULL,
  UNIQUE KEY `id_sessao` (`id_sessao`,`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vars_sessao`
--

LOCK TABLES `vars_sessao` WRITE;
/*!40000 ALTER TABLE `vars_sessao` DISABLE KEYS */;
/*!40000 ALTER TABLE `vars_sessao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-29 11:33:57
