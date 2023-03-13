/*
 Ingresos totales por cada actor sin importar su participación en las películas
*/
SELECT Nombre, SUM(Sueldo) as 'Ingreso Ttotal'
FROM Elenco
GROUP BY Nombre
ORDER BY SUM(Sueldo) DESC

/*
El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.
*/

SELECT Nomestudio, Presupuesto
FROM, Pelicula P
WHERE P.año > 01/01/1980 AND P.año < 31/12/1989
GROUP BY Nomestudio
ORDER BY Presupuesto DESC

/*
Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones 
de dolares por película.
*/

SELECT nombre, AVG(sueldo)
FROM Elenco E, Actor A
WHERE A.nombre = E.nombre
AND A.sexo = ‘Hombre’
GROUP BY nombre
HAVING AVG(sueldo) > 5000000
ORDER BY AVG(sueldo) DESC

/*
Título y año de producción de las películas con menor presupuesto. 
(Por ejemplo, la película de Titanic se ha producido varias veces. Entre la lista de películas estaría la 
producción de Titanic y el año que fue filmada con menor presupuesto).
*/
SELECT titulo, año
FROM Pelicula
GROUP BY año
ORDER BY presupuesto ASC
LIMIT 0,10

/*
Mostrar el sueldo de la actriz mejor pagada.
*/
SELECT Nombre, SUM(Sueldo) as ‘Ingreso Total’
FROM Elenco as E, Actor as A
WHERE E.nombre = A.nombre
AND A.sexo = ‘Mujer’
GROUP BY Nombre
ORDER BY SUM(Sueldo) DESC
LIMIT 0,1


