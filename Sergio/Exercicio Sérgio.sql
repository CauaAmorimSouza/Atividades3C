-- 1. 
SELECT nome
FROM vendedor
ORDER BY nome;

-- 2. 
SELECT nome, valor
FROM produto
WHERE valor > 200
ORDER BY valor;

-- 3. 
SELECT nome, valor, valor * 1.10 AS valor_reajustado
FROM produto
ORDER BY nome;

-- 4. 
SELECT m.nome
FROM municipio m
JOIN uf u ON m.iduf = u.iduf
WHERE u.sigla = 'RS';

-- 5. 
SELECT *
FROM pedido
WHERE data_pedido BETWEEN '2008-04-10' AND '2008-04-25'
ORDER BY valor;

-- 6. 
SELECT *
FROM pedido
WHERE valor BETWEEN 1000 AND 1500;

-- 7. 
SELECT *
FROM pedido
WHERE valor NOT BETWEEN 100 AND 500;

-- 8.
SELECT *
FROM pedido
WHERE idvendedor = (SELECT idvendedor FROM vendedor WHERE nome = 'André')
ORDER BY valor DESC;

-- 9. 
SELECT *
FROM pedido
WHERE idcliente = (SELECT idcliente FROM cliente WHERE nome = 'Manoel')
ORDER BY valor;

-- 10. 
SELECT *
FROM pedido
WHERE idcliente = (SELECT idcliente FROM cliente WHERE nome = 'jessica')
AND idvendedor = (SELECT idvendedor FROM vendedor WHERE nome = 'andre');

-- 11. 
SELECT *
FROM pedido
WHERE idtransportadora = (SELECT idtransportadora FROM transportadora WHERE nome = 'União Transportes');

-- 12. 
SELECT *
FROM pedido
WHERE idvendedor IN (SELECT idvendedor FROM vendedor WHERE nome IN ('Maria', 'Aline'));

-- 13. 
SELECT *
FROM cliente
WHERE idmunicipio IN (SELECT idmunicipio FROM municipio WHERE nome IN ('União da Vitória', 'Porto União'));

-- 14. 
SELECT *
FROM cliente
WHERE idmunicipio NOT IN (SELECT idmunicipio FROM municipio WHERE nome IN ('União da Vitória', 'Porto União'));

-- 15. 
SELECT *
FROM cliente
WHERE logradouro IS NULL;

-- 16. 
SELECT *
FROM cliente
WHERE logradouro LIKE 'Avenida%';

-- 17. 
SELECT *
FROM vendedor
WHERE nome LIKE 'S%';

-- 18. 
SELECT *
FROM vendedor
WHERE LOWER(nome) LIKE '%a';

-- 19. 
SELECT *
FROM vendedor
WHERE LOWER(nome) NOT LIKE 'a%';

-- 20. 
SELECT m.nome
FROM municipio m
JOIN uf u ON m.iduf = u.iduf
WHERE m.nome LIKE 'P%' AND u.sigla = 'SC';

-- 21. 
SELECT *
FROM fornecedor
WHERE nome IS NOT NULL;

-- 22. 
SELECT *
FROM pedido_produto
WHERE idpedido = 1;

-- 23. 
SELECT *
FROM pedido_produto
WHERE idpedido IN (6, 10);
