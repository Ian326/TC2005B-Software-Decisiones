/*
Mostrar la Descripción de los materiales y el total de veces que han sido entregados
Durante la década pasada de mayor a menor
*/

SELECT Descripcion, COUNT(Cantidad) as Entregas
FROM Materiales M, Entregan E
WHERE E.Clave = M.Clave
AND E.Fecha BETWEEN '2000/01/01' AND '2010/12/31'
GROUP BY M.Descripcion
ORDER BY Entregas DESC