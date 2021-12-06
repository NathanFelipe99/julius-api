import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectDb } from './config/db';
import { routerUsuario } from './route/usuario';
import { routerLancamento } from './route/lancamento';
import { send } from 'process';

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(bodyParser.json());

/**
 * Configura os logs para logs mais detalhados
 */
app.use(logger('dev'));

/**
 * Conecta no db
 */
connectDb();

/**
 * Configuração de rotas
 */
app.use('/usuario', routerUsuario);
app.use('/lancamento', routerLancamento);
app.use('/', (req, res) => res.send('API do AppJulius'));