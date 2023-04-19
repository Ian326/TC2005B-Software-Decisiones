-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-04-2023 a las 06:42:06
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usercomments`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usercomments`
--

CREATE TABLE `usercomments` (
  `idUser` int(11) NOT NULL,
  `userName` varchar(100) NOT NULL DEFAULT 'Anonymous',
  `textSent` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usercomments`
--

INSERT INTO `usercomments` (`idUser`, `userName`, `textSent`) VALUES
(1, 'Anonymous', 'Arthur sepsy'),
(2, 'Anonymous', 'asdasda'),
(3, 'Ian326', 'Hola mundo! :)'),
(4, 'Anonymous', 'hola'),
(5, 'Ian326', ':P');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userimages`
--

CREATE TABLE `userimages` (
  `idUser` int(11) NOT NULL,
  `userName` varchar(400) NOT NULL,
  `imageSent` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `userimages`
--

INSERT INTO `userimages` (`idUser`, `userName`, `imageSent`) VALUES
(1, 'Ian326', '720-PP_MinecraftSkin7.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userprivileges`
--

CREATE TABLE `userprivileges` (
  `userID` int(11) DEFAULT NULL,
  `userName` varchar(100) NOT NULL,
  `uploadImages` tinyint(1) NOT NULL DEFAULT 0,
  `uploadText` tinyint(1) NOT NULL DEFAULT 1,
  `viewImages` tinyint(1) NOT NULL DEFAULT 1,
  `viewText` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `userprivileges`
--

INSERT INTO `userprivileges` (`userID`, `userName`, `uploadImages`, `uploadText`, `viewImages`, `viewText`) VALUES
(1, 'Ian326', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `userName` varchar(400) NOT NULL,
  `userPassword` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userID`, `userName`, `userPassword`) VALUES
(1, 'Ian326', '$2a$12$d4dHIF83v2UjhmGQfvU.rONALTa1X098nTdZxNz..Rcsyu5/7gLYK'),
(2, 'diego@gmail.com', '$2a$12$KygyEUdKompGwgY1hMzbKeYUfIWFnKrVZWjHYz9vluOCwy72a.eWO');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usercomments`
--
ALTER TABLE `usercomments`
  ADD PRIMARY KEY (`idUser`);

--
-- Indices de la tabla `userimages`
--
ALTER TABLE `userimages`
  ADD PRIMARY KEY (`idUser`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usercomments`
--
ALTER TABLE `usercomments`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `userimages`
--
ALTER TABLE `userimages`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
