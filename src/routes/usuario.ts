import { Router } from 'express';

export const routerUsuario = Router();

/**
 * Criando uma rota padrão
 */

/** Toda função deve receber dois parâmetros: request (req) e response (res) */
routerUsuario.get('/', (req, res) => res.send('UserServices'));