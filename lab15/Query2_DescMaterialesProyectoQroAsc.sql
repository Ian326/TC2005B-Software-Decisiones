/*
Mostrar la descripción de los materiales entregados al proyecto Querétaro limpio
ordenados alfabéticamente
*/
SELECT Descripcion
FROM Materiales as M, Entregan E, Proyectos P
WHERE M.clave = E.clave
AND P.numero = E.numero
AND Denominacion = 'Queretaro limpio'
ORDER BY descripcion ASC