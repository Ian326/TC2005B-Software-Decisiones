/*
Mostrar la Razón social de los proveedores y el total de unidades entregadas
sin importal el material ordenados de mayor a menor en función de las
unidades entregadas. Solo para aquellos que entregaron más de 1000 unidades
*/

SELECT RazonSocial, SUM(Cantidad) AS Unidades
FROM Proveedores P, Entregan E
WHERE P.RFC = E.RFC
GROUP BY RazonSocial
HAVING SUM(Cantidad) > 1000
ORDER BY Cantidad DESC