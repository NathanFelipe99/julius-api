import { Server } from 'http';
import { app } from './app';

const port = 3000;

const server = app.listen(port, () => console.log(`App listening on port ${port}`));

/**
 * Ao encerrar o processo, o app é finalizado também
 */
process.on('SIGINT', () => {
  server.close();
  console.log('App finished!');
}); 