# Projeto
- Este projeto representa uma locadora de veículos e esta sendo desenvolvido para apresentar os conhecimentos aprendidos em Node.js no curso de Pós Full stack developement JavaScript.

# Requerimentos
- Node.js 14.x.x
- MySQL

# Para iniciar a aplicação
- Install Mysql no docker
- docker run --name up-mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:latest
-
- yarn [start-dev | start-prod]
- ou
- npm run [start-dev | start-prod]

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabela de clientes';
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

```sql
CREATE TABLE `veiculo` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `ano` int NOT NULL,
  `valor` double NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

```json
-------------------------------------------------------------------------------
GET  /cliente
-------------------------------------------------------------------------------
[
    {
        'codigo': 1,
        'nome': 'Robson Candido dos Santos Alves',
        'endereco': {
            'cep': '80210-110',
            'logradouro': 'Rua Paschoal Bordignon',
            'complemento': '',
            'bairro': 'Jardim Botânico',
            'localidade': 'Curitiba',
            'uf': 'PR',
            'ibge': '4106902',
            'gia': '',
            'ddd': '41',
            'siafi': '7535'
        }
    },
    {
        'codigo': 2,
        'nome': 'Henrique Casagrande dos Santos Alves',
        'endereco': {
            'cep': '82820-230',
            'logradouro': 'Rua José Lins do Rego',
            'complemento': '',
            'bairro': 'Bairro Alto',
            'localidade': 'Curitiba',
            'uf': 'PR',
            'ibge': '4106902',
            'gia': '',
            'ddd': '41',
            'siafi': '7535'
        }
    }
]

-------------------------------------------------------------------------------
POST /cliente
PUT  /cliente/{codigo}
-------------------------------------------------------------------------------
{
    'nome': 'Robson Candido dos Santos Alves',
    'anoNascimento': '1980-08-29',
    'cep': '80210-110'
}
```

```json
-------------------------------------------------------------------------------
GET  /veiculo
-------------------------------------------------------------------------------
[
    {
        'codigo': 1,
        'marca': 'Chevrollet',
        'modelo': 'Cruze',
        'ano': 2017,
        'valor': 150000
    },
    {
        'codigo': 2,
        'marca': 'Chevrollet',
        'modelo': 'Onix',
        'ano': 2017,
        'valor': 80000
    }
]

-------------------------------------------------------------------------------
POST /veiculo
-------------------------------------------------------------------------------
{
    'marca': 'Chevrollet',
    'modelo': 'Cruze',
    'ano': 2017,
    'valor': 150000.00
}
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