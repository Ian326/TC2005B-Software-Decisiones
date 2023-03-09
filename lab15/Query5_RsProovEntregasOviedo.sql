/*
Mostrar la Razón Social de los Proveedores que registraron más entregas que el proveedor 'Oviedo'
*/

SELECT RazonSocial, Count(Cantidad) AS Entregas
FROM Proveedores P, Entregan E
WHERE P.RFC = E.RFC
Group by RazonSocial
HAVING (Entregas > 12)
/*
Falto:
Entregas > SELECT(Count(Cantidad) AS Entregas)
			FROM Proveedores P, Entregan E
            WHERE P.RFC = E.RFC
            AND RazonSocial = 'Oviedo'
*/