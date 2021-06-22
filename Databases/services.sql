-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 28, 2021 at 05:09 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `services`
--

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `adaasdasd` int(11) NOT NULL,
  `sdad` int(11) NOT NULL,
  `asdas` int(11) NOT NULL,
  `dasda` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
  `name` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `Mobile` bigint(15) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `services` varchar(50) NOT NULL,
  `experiance` int(2) NOT NULL,
  `rating` int(1) NOT NULL,
  `bname` varchar(40) NOT NULL,
  `photo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`name`, `location`, `Mobile`, `Email`, `Address`, `services`, `experiance`, `rating`, `bname`, `photo`) VALUES
('vikram', 'Warangal, Telangana, India', 78787878787, 'dajsjk@gjjzlkgfd.com', 'Asdfngh', 'Carpenter', 53, 0, 'kjdash', ''),
('Vikram', 'Warangal, Telangana, India', 9154007430, 'vkrm@gmail.com', 'alksdjkhgvsabm,dasdasdasdasdasdas', '2', 2, 0, 'NA', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`Email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
