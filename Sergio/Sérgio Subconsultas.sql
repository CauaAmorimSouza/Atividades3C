Lista 2

-- 1. 
SELECT nome
FROM cliente
WHERE idmunicipio = (
    SELECT idmunicipio
    FROM cliente
    WHERE nome = 'Manoel'
)
AND nome <> 'Manoel';

-- 2. 
SELECT data_pedido, valor
FROM pedido
WHERE valor < (SELECT AVG(valor) FROM pedido);

-- 3.
SELECT p.data_pedido, p.valor, c.nome AS cliente, v.nome AS vendedor
FROM pedido p
JOIN cliente c ON p.idcliente = c.idcliente
JOIN vendedor v ON p.idvendedor = v.idvendedor
WHERE (SELECT COUNT(*) FROM pedido_produto WHERE pedido_produto.idpedido = p.idpedido) >= 2;


-- 4. 
SELECT nome
FROM cliente
WHERE idmunicipio = (
    SELECT idmunicipio
    FROM transportadora
    WHERE nome = 'BSTransportes'
);

-- 5. 
SELECT DISTINCT c.nome, m.nome AS municipio
FROM cliente c
JOIN municipio m ON c.idmunicipio = m.idmunicipio
WHERE c.idmunicipio IN (SELECT idmunicipio FROM transportadora);

-- 6. 
UPDATE pedido
SET valor = valor * 1.05
WHERE valor > (SELECT AVG(valor) FROM pedido);

-- 7. 
SELECT c.nome, COUNT(p.idpedido) AS quantidade_pedidos
FROM cliente c
LEFT JOIN pedido p ON c.idcliente = p.idcliente
GROUP BY c.nome;


-- 8. 
SELECT c.nome, COUNT(p.idpedido) AS quantidade_pedidos
FROM cliente c
JOIN pedido p ON c.idcliente = p.idcliente
GROUP BY c.nome
HAVING COUNT(p.idpedido) > 0;

