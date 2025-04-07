import {knex as knexConfig } from "knex"
import config from "../../knexfile"


export const knex = knexConfig(config)

// Estamos carregando para dentro do knex, as configurações do nosso banco 

// Vamos utilizar esse arquivo todas as vezes que formos manipular ou acessar o nosso banco de dados.

