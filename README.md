# Projeto
- Este projeto representa uma locadora de veículos e esta sendo desenvolvido para apresentar os conhecimentos aprendidos em Node.js no curso de Pós Full stack developement JavaScript.

# Requerimentos
- Node.js 14.x.x
- Potgres

# Para iniciar a aplicação
- Install Mysql no docker
- docker run --name up-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:tag
-
- yarn start
- ou
- npm start

# Tabelas do banco de dados
```sql
CREATE TABLE `cliente` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `ano_nascimento` datetime NOT NULL,
  `endereco` varchar(100) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `cliente_FK` (`endereco`),
  CONSTRAINT `cliente_FK` FOREIGN KEY (`endereco`) REFERENCES `endereco` (`cep`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabela de clientes';
```

```sql
CREATE TABLE `endereco` (
  `cep` varchar(100) NOT NULL,
  `logradouro` varchar(100) DEFAULT NULL,
  `complemento` varchar(100) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `localidade` varchar(100) DEFAULT NULL,
  `uf` varchar(100) DEFAULT NULL,
  `ibge` varchar(100) DEFAULT NULL,
  `gia` varchar(100) DEFAULT NULL,
  `ddd` varchar(100) DEFAULT NULL,
  `siafi` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cep`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

# Para acessar a documentação swagger
- http://localhost:3000/api-docs

# Referencias
- https://swagger.io/specification/v2/
- https://swagger.io/docs/specification/grouping-operations-with-tags/
- https://www.npmjs.com/package/swagger-jsdoc
- https://github.com/Surnet/swagger-jsdoc/blob/v7/docs/FIRST-STEPS.md
- https://nodemon.io/
- https://docs.microsoft.com/pt-br/azure/postgresql/connect-nodejs
- https://hub.docker.com/_/postgres
- https://dbeaver.io/
- https://www.npmjs.com/package/mysql2