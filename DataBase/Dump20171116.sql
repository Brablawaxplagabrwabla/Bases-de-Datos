-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: medictypedb
-- ------------------------------------------------------
-- Server version	5.7.19-log

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
-- Table structure for table `alergias`
--

DROP TABLE IF EXISTS `alergias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alergias` (
  `Alergia` varchar(45) NOT NULL,
  `Paciente_idPaciente` int(11) NOT NULL,
  UNIQUE KEY `Alergia_UNIQUE` (`Alergia`),
  KEY `fk_Alergias_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_Alergias_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alergias`
--

LOCK TABLES `alergias` WRITE;
/*!40000 ALTER TABLE `alergias` DISABLE KEYS */;
INSERT INTO `alergias` VALUES ('Glutten',1),('Polen',1),('Animales',2),('Moho',3),('Acaros',4);
/*!40000 ALTER TABLE `alergias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compactivos`
--

DROP TABLE IF EXISTS `compactivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compactivos` (
  `CompActivos` varchar(100) NOT NULL,
  `Medicamento_idMedicamento` int(11) NOT NULL,
  KEY `fk_CompActivos_Medicamento1_idx` (`Medicamento_idMedicamento`),
  CONSTRAINT `fk_CompActivos_Medicamento1` FOREIGN KEY (`Medicamento_idMedicamento`) REFERENCES `medicamento` (`idMedicamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compactivos`
--

LOCK TABLES `compactivos` WRITE;
/*!40000 ALTER TABLE `compactivos` DISABLE KEYS */;
INSERT INTO `compactivos` VALUES ('diclofenaco sodico',1),('Ibuprofeno',2),('Cloranfenicol',3),('Monohidrato de ciclofosfamida',4);
/*!40000 ALTER TABLE `compactivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consulta`
--

DROP TABLE IF EXISTS `consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consulta` (
  `Paciente_idPaciente` int(11) NOT NULL,
  `Medico_idMedico` int(11) NOT NULL,
  `Motivo` varchar(100) NOT NULL,
  `FechaCon` date NOT NULL,
  PRIMARY KEY (`Paciente_idPaciente`,`Medico_idMedico`),
  KEY `fk_Paciente_has_Medico_Medico1_idx` (`Medico_idMedico`),
  KEY `fk_Paciente_has_Medico_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_Paciente_has_Medico_Medico1` FOREIGN KEY (`Medico_idMedico`) REFERENCES `medico` (`idMedico`),
  CONSTRAINT `fk_Paciente_has_Medico_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
INSERT INTO `consulta` VALUES (1,1,'Chequeo de crecimiento','2016-05-06'),(2,2,'Problemas de vision','2004-06-17'),(3,3,'Posible cancer','2017-10-13'),(4,4,'Dolores de cabeza','2015-09-08');
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultorio`
--

DROP TABLE IF EXISTS `consultorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consultorio` (
  `Consultorio` varchar(100) NOT NULL,
  `Medico_idMedico` int(11) NOT NULL,
  KEY `fk_Consultorio_Medico1_idx` (`Medico_idMedico`),
  CONSTRAINT `fk_Consultorio_Medico1` FOREIGN KEY (`Medico_idMedico`) REFERENCES `medico` (`idMedico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultorio`
--

LOCK TABLES `consultorio` WRITE;
/*!40000 ALTER TABLE `consultorio` DISABLE KEYS */;
INSERT INTO `consultorio` VALUES ('Clinica El Avila',1),('Clinica Caracas',2),('Clinica Santa Sofia',3),('CDI Llanito',4),('CDI Petare',5);
/*!40000 ALTER TABLE `consultorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `describe_`
--

DROP TABLE IF EXISTS `describe_`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `describe_` (
  `Historia_idHistoria` int(11) NOT NULL,
  `Patologia_idPatologia` int(11) NOT NULL,
  PRIMARY KEY (`Historia_idHistoria`,`Patologia_idPatologia`),
  KEY `fk_Historia_has_Patologia_Patologia1_idx` (`Patologia_idPatologia`),
  KEY `fk_Historia_has_Patologia_Historia1_idx` (`Historia_idHistoria`),
  CONSTRAINT `fk_Historia_has_Patologia_Historia1` FOREIGN KEY (`Historia_idHistoria`) REFERENCES `historia` (`idHistoria`),
  CONSTRAINT `fk_Historia_has_Patologia_Patologia1` FOREIGN KEY (`Patologia_idPatologia`) REFERENCES `patologia` (`idPatologia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `describe_`
--

LOCK TABLES `describe_` WRITE;
/*!40000 ALTER TABLE `describe_` DISABLE KEYS */;
INSERT INTO `describe_` VALUES (3,1),(4,2),(2,3);
/*!40000 ALTER TABLE `describe_` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialidad`
--

DROP TABLE IF EXISTS `especialidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especialidad` (
  `idEspecialidad` int(11) NOT NULL AUTO_INCREMENT,
  `Especialidad` varchar(50) NOT NULL,
  PRIMARY KEY (`idEspecialidad`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidad`
--

LOCK TABLES `especialidad` WRITE;
/*!40000 ALTER TABLE `especialidad` DISABLE KEYS */;
INSERT INTO `especialidad` VALUES (1,'Pediatra\r'),(2,'Oftalmologo\r'),(3,'Oncologo\r');
/*!40000 ALTER TABLE `especialidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialidades`
--

DROP TABLE IF EXISTS `especialidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especialidades` (
  `Medico_idMedico` int(11) NOT NULL,
  `Especialidad_idEspecialidad` int(11) NOT NULL,
  KEY `fk_Especialidades_Medico1_idx` (`Medico_idMedico`),
  KEY `fk_Especialidades_Especialidad1_idx` (`Especialidad_idEspecialidad`),
  CONSTRAINT `fk_Especialidades_Especialidad1` FOREIGN KEY (`Especialidad_idEspecialidad`) REFERENCES `especialidad` (`idEspecialidad`),
  CONSTRAINT `fk_Especialidades_Medico1` FOREIGN KEY (`Medico_idMedico`) REFERENCES `medico` (`idMedico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidades`
--

LOCK TABLES `especialidades` WRITE;
/*!40000 ALTER TABLE `especialidades` DISABLE KEYS */;
INSERT INTO `especialidades` VALUES (1,1),(2,2),(3,3),(4,1),(5,2);
/*!40000 ALTER TABLE `especialidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado` (
  `idEstado` int(11) NOT NULL AUTO_INCREMENT,
  `Estado` varchar(50) NOT NULL,
  PRIMARY KEY (`idEstado`),
  UNIQUE KEY `Estado_UNIQUE` (`Estado`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'Amazonas\r'),(2,'Anzoategui\r'),(3,'Apure\r'),(4,'Aragua\r'),(5,'Barinas\r'),(6,'Bolivar\r'),(7,'Carabobo\r'),(8,'Cojedes\r'),(9,'Delta Amacuro\r'),(10,'Distrito Capital\r'),(11,'Falcon\r'),(13,'Lara\r'),(12,'Miranda\r');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historia`
--

DROP TABLE IF EXISTS `historia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historia` (
  `idHistoria` int(11) NOT NULL AUTO_INCREMENT,
  `FechaHis` date NOT NULL,
  `Sintomas` varchar(100) NOT NULL,
  `Notas` varchar(100) DEFAULT NULL,
  `Peso` float NOT NULL,
  `Estatura` float NOT NULL,
  `Diagnostico` varchar(100) NOT NULL,
  `Intervenido` tinyint(1) DEFAULT NULL,
  `Diabetes` tinyint(1) DEFAULT NULL,
  `Hipertenso` tinyint(1) DEFAULT NULL,
  `Fumador` tinyint(1) DEFAULT NULL,
  `ReferidoPor` int(11) DEFAULT NULL,
  PRIMARY KEY (`idHistoria`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historia`
--

LOCK TABLES `historia` WRITE;
/*!40000 ALTER TABLE `historia` DISABLE KEYS */;
INSERT INTO `historia` VALUES (1,'2016-05-06','No aplica','Ninguna',80,1.85,'Crecimiento adecuado',0,0,0,1,2),(2,'2004-06-17','Presenta infeccion en los ojos','Ninguna',75,1.75,'Infeccion en los ojos',0,0,1,0,0),(3,'2017-10-13','Estres','Ninguna',68,1.65,'Cancer de cerebro',0,1,0,0,1),(4,'2015-09-08','Dolor de cabeza, posible migrana','Ninguna',79,1.77,'Migrana',1,0,0,0,0),(5,'1900-12-31','Sin definir','Sin definir',0,0,'Sin definir',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `historia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoftalmologia`
--

DROP TABLE IF EXISTS `hoftalmologia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hoftalmologia` (
  `Historia_idHistoria` int(11) NOT NULL,
  `Formula` varchar(45) DEFAULT NULL,
  `Refraccion` varchar(45) DEFAULT NULL,
  KEY `fk_HOftalmologia_Historia1_idx` (`Historia_idHistoria`),
  CONSTRAINT `fk_HOftalmologia_Historia1` FOREIGN KEY (`Historia_idHistoria`) REFERENCES `historia` (`idHistoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoftalmologia`
--

LOCK TABLES `hoftalmologia` WRITE;
/*!40000 ALTER TABLE `hoftalmologia` DISABLE KEYS */;
INSERT INTO `hoftalmologia` VALUES (2,'s1.25+ c0.25- a.60 A.2.25+','Normal\r');
/*!40000 ALTER TABLE `hoftalmologia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `honcologia`
--

DROP TABLE IF EXISTS `honcologia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `honcologia` (
  `Historia_idHistoria` int(11) NOT NULL,
  `Metastasis` tinyint(1) DEFAULT NULL,
  `EstadoCancer` varchar(45) DEFAULT NULL,
  `VidaRestante` varchar(45) DEFAULT NULL,
  KEY `fk_HOncologia_Historia1_idx` (`Historia_idHistoria`),
  CONSTRAINT `fk_HOncologia_Historia1` FOREIGN KEY (`Historia_idHistoria`) REFERENCES `historia` (`idHistoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `honcologia`
--

LOCK TABLES `honcologia` WRITE;
/*!40000 ALTER TABLE `honcologia` DISABLE KEYS */;
INSERT INTO `honcologia` VALUES (3,1,'Astrocitomas Grado 3','Sin determinar\r');
/*!40000 ALTER TABLE `honcologia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hpediatria`
--

DROP TABLE IF EXISTS `hpediatria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hpediatria` (
  `Historia_idHistoria` int(11) NOT NULL,
  `AnchoCabeza` float DEFAULT NULL,
  `DiametroBrazos` float DEFAULT NULL,
  `Crecimiento` varchar(200) DEFAULT NULL,
  KEY `fk_HPediatra_Historia1_idx` (`Historia_idHistoria`),
  CONSTRAINT `fk_HPediatra_Historia1` FOREIGN KEY (`Historia_idHistoria`) REFERENCES `historia` (`idHistoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hpediatria`
--

LOCK TABLES `hpediatria` WRITE;
/*!40000 ALTER TABLE `hpediatria` DISABLE KEYS */;
INSERT INTO `hpediatria` VALUES (1,20,5,'Normal\r'),(4,17,8,'Ya culmino su etapa de crecimiento\r');
/*!40000 ALTER TABLE `hpediatria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicamento`
--

DROP TABLE IF EXISTS `medicamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicamento` (
  `idMedicamento` int(11) NOT NULL AUTO_INCREMENT,
  `NomComercial` varchar(200) NOT NULL,
  `EfectosSec` varchar(200) NOT NULL,
  `Contraindicaciones` varchar(200) NOT NULL,
  PRIMARY KEY (`idMedicamento`),
  UNIQUE KEY `NomComercial_UNIQUE` (`NomComercial`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamento`
--

LOCK TABLES `medicamento` WRITE;
/*!40000 ALTER TABLE `medicamento` DISABLE KEYS */;
INSERT INTO `medicamento` VALUES (1,'Diclofenac Potasico','indigestion, dolor de estomago, nauseas, vomito, diarrea, estrenimiento','No usar en presencia de ulceras, hipersensibilidad u otros medicamentos que inhiben la prostaglandina sintetasa\r'),(2,'Ibuprofeno','Dispepsia, nauseas, acidez en el estomago, mareos, vision borrosa','No se recomienda el uso en mujeres embarazadas o en periodo de lactancia. No se recomienda en menores de 12 anos\r'),(3,'Cloranfenicol','Letargia, cianosis, hipersensibilidad','Hipersensibilidad conocida a cualquiera de los componentes de la formula\r'),(4,'Ciclofosfamida','Nauseas, vomitos, perdida de apetito, dolor abdominal','No usar en pacientes con depresion de la funcion medular osea ni en pacientes con hipersensibildad al medicamento\r');
/*!40000 ALTER TABLE `medicamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medico` (
  `idMedico` int(11) NOT NULL AUTO_INCREMENT,
  `Licencia` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  PRIMARY KEY (`idMedico`),
  UNIQUE KEY `Licencia_UNIQUE` (`Licencia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
INSERT INTO `medico` VALUES (1,111,'Abraham','Chang\r'),(2,222,'Maximiliano','Casale\r'),(3,333,'Gabriel','Dellelis\r'),(4,444,'Gabriele','Troncone\r'),(5,555,'Rafael','Matienzo\r');
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paciente` (
  `idPaciente` int(11) NOT NULL AUTO_INCREMENT,
  `Cedula` int(11) NOT NULL,
  `Sexo` char(1) NOT NULL,
  `Nom1` varchar(20) NOT NULL,
  `Nom2` varchar(20) NOT NULL,
  `Ape1` varchar(20) NOT NULL,
  `Ape2` varchar(20) NOT NULL,
  `FechaNac` date NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Estado_idEstado` int(11) NOT NULL,
  `TipoSangre_idTipoSangre` int(11) NOT NULL,
  PRIMARY KEY (`idPaciente`),
  UNIQUE KEY `Cedula_UNIQUE` (`Cedula`),
  KEY `fk_Paciente_Estado1_idx` (`Estado_idEstado`),
  KEY `fk_Paciente_TipoSangre1_idx` (`TipoSangre_idTipoSangre`),
  CONSTRAINT `fk_Paciente_Estado1` FOREIGN KEY (`Estado_idEstado`) REFERENCES `estado` (`idEstado`),
  CONSTRAINT `fk_Paciente_TipoSangre1` FOREIGN KEY (`TipoSangre_idTipoSangre`) REFERENCES `tiposangre` (`idTipoSangre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES (1,26500400,'M','Abraham','E','Chang','G','1998-05-30','Guatire, Municipio Plazas','achang@gmail.com',12,1),(2,26501401,'F','Sara','Y','Macayo','L','1995-01-12','Catia, Municipio Libertador','smacayo@gmail.com',10,2),(3,26502402,'F','Estefania','P','Buitrago','S','1997-09-05','Manzanares','ebuitrago@gmail.com',10,3),(4,26503403,'F','Andrea','E','Guerrero','G','1997-01-20','Guatire, Las rosas','aguerrero@gmail.com',12,4),(5,25217545,'M','Maximiliano','Sebastian','Casale','Lara','1994-01-19','Macaracuay','mcasale@correo.unimet.edu.ve',12,2),(6,24209659,'M','Isabella','Margarita','De Sanctis','Marques','1995-12-12','Cafetal','idesanctis@correo.unimet.edu.ve',10,2);
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patologia`
--

DROP TABLE IF EXISTS `patologia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patologia` (
  `idPatologia` int(11) NOT NULL AUTO_INCREMENT,
  `NombrePat` varchar(100) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `ModoTrans` varchar(100) NOT NULL,
  `Patogenesis` varchar(100) NOT NULL,
  PRIMARY KEY (`idPatologia`),
  UNIQUE KEY `NombrePat_UNIQUE` (`NombrePat`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patologia`
--

LOCK TABLES `patologia` WRITE;
/*!40000 ALTER TABLE `patologia` DISABLE KEYS */;
INSERT INTO `patologia` VALUES (1,'Cancer cerebral','Tumores que surgen a partir de las envolturas del cerebro o la medula (meninges)','Desconocido','Desconocido\r'),(2,'Migrana cronica','Dolor de cabeza que ocurre aproximadamente 4 o mas horas al dia. Generando dolor, sensibilidad a la luz y al ruido','Hereditario','Desconocido\r'),(3,'Conjuntivitis','Inflamacion de la conjuntiva, el tejido fino y transparente que cubre el interior del parpado y la parte blanca del ojo.','Transmitido por virus, bacterias, alergenos(caspa de mascotas o acaros), sustancias irritantes','Desconocido\r'),(4,'VIH','Virus Inmunodeficiencia Humana','Sexual','Desconocido');
/*!40000 ALTER TABLE `patologia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `similara`
--

DROP TABLE IF EXISTS `similara`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `similara` (
  `Medicamento_idMedicamento` int(11) NOT NULL,
  `Medicamento_idMedicamento1` int(11) NOT NULL,
  PRIMARY KEY (`Medicamento_idMedicamento`,`Medicamento_idMedicamento1`),
  KEY `fk_Medicamento_has_Medicamento_Medicamento2_idx` (`Medicamento_idMedicamento1`),
  KEY `fk_Medicamento_has_Medicamento_Medicamento1_idx` (`Medicamento_idMedicamento`),
  CONSTRAINT `fk_Medicamento_has_Medicamento_Medicamento1` FOREIGN KEY (`Medicamento_idMedicamento`) REFERENCES `medicamento` (`idMedicamento`),
  CONSTRAINT `fk_Medicamento_has_Medicamento_Medicamento2` FOREIGN KEY (`Medicamento_idMedicamento1`) REFERENCES `medicamento` (`idMedicamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `similara`
--

LOCK TABLES `similara` WRITE;
/*!40000 ALTER TABLE `similara` DISABLE KEYS */;
INSERT INTO `similara` VALUES (2,1),(1,2);
/*!40000 ALTER TABLE `similara` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonos`
--

DROP TABLE IF EXISTS `telefonos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefonos` (
  `Telefono` varchar(16) NOT NULL,
  `Paciente_idPaciente` int(11) NOT NULL,
  KEY `fk_Telefonos_Paciente_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_Telefonos_Paciente` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonos`
--

LOCK TABLES `telefonos` WRITE;
/*!40000 ALTER TABLE `telefonos` DISABLE KEYS */;
INSERT INTO `telefonos` VALUES ('4123853971',1),('4121111111',2),('4122222222',3),('4122222222',4),('04126177158',5);
/*!40000 ALTER TABLE `telefonos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiene`
--

DROP TABLE IF EXISTS `tiene`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tiene` (
  `Medico_idMedico` int(11) NOT NULL,
  `Historia_idHistoria` int(11) NOT NULL,
  `Paciente_idPaciente` int(11) NOT NULL,
  PRIMARY KEY (`Medico_idMedico`,`Historia_idHistoria`,`Paciente_idPaciente`),
  KEY `fk_Medico_has_Historia_Historia1_idx` (`Historia_idHistoria`),
  KEY `fk_Medico_has_Historia_Medico1_idx` (`Medico_idMedico`),
  KEY `fk_Tiene_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_Medico_has_Historia_Historia1` FOREIGN KEY (`Historia_idHistoria`) REFERENCES `historia` (`idHistoria`),
  CONSTRAINT `fk_Medico_has_Historia_Medico1` FOREIGN KEY (`Medico_idMedico`) REFERENCES `medico` (`idMedico`),
  CONSTRAINT `fk_Tiene_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiene`
--

LOCK TABLES `tiene` WRITE;
/*!40000 ALTER TABLE `tiene` DISABLE KEYS */;
INSERT INTO `tiene` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(1,5,6);
/*!40000 ALTER TABLE `tiene` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiposangre`
--

DROP TABLE IF EXISTS `tiposangre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tiposangre` (
  `TipoSangre` varchar(5) NOT NULL,
  `idTipoSangre` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idTipoSangre`),
  UNIQUE KEY `TipoSangre_UNIQUE` (`TipoSangre`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiposangre`
--

LOCK TABLES `tiposangre` WRITE;
/*!40000 ALTER TABLE `tiposangre` DISABLE KEYS */;
INSERT INTO `tiposangre` VALUES ('A+',4),('A-',3),('AB+',8),('AB-',7),('B+',6),('B-',5),('O+',2),('O-',1);
/*!40000 ALTER TABLE `tiposangre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tratamiento`
--

DROP TABLE IF EXISTS `tratamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tratamiento` (
  `Historia_idHistoria` int(11) NOT NULL,
  `Medicamento_idMedicamento` int(11) NOT NULL,
  `Posologia` varchar(45) NOT NULL,
  PRIMARY KEY (`Historia_idHistoria`,`Medicamento_idMedicamento`),
  KEY `fk_Historia_has_Medicamento_Medicamento1_idx` (`Medicamento_idMedicamento`),
  KEY `fk_Historia_has_Medicamento_Historia1_idx` (`Historia_idHistoria`),
  CONSTRAINT `fk_Historia_has_Medicamento_Historia1` FOREIGN KEY (`Historia_idHistoria`) REFERENCES `historia` (`idHistoria`),
  CONSTRAINT `fk_Historia_has_Medicamento_Medicamento1` FOREIGN KEY (`Medicamento_idMedicamento`) REFERENCES `medicamento` (`idMedicamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamiento`
--

LOCK TABLES `tratamiento` WRITE;
/*!40000 ALTER TABLE `tratamiento` DISABLE KEYS */;
INSERT INTO `tratamiento` VALUES (2,3,'Lorem Ipsum\r'),(3,4,'Lorem Ipsum\r'),(4,2,'Lorem Ipsum\r');
/*!40000 ALTER TABLE `tratamiento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-16 14:38:57
