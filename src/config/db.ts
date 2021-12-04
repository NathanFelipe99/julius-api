import { SIGINT } from 'constants';
import { createConnection } from 'typeorm';

export const connectDb = async () => {
  const connection = await createConnection();
  console.log(`App connected to ${connection.options.database}`);

  process.on('SIGINT', () => {
    connection.close().then(() => console.log('Connection closed!'));
  });
}