// src/appwriteConfig.ts
import { Client, Account, Databases, Storage, ID } from 'appwrite';

// Inicializa el cliente de Appwrite
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Reemplaza con tu endpoint de Appwrite
  .setProject('66cfc3db000519cf074f'); // Reemplaza con tu ID de proyecto

// Inicializa los servicios que necesitas
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// Reemplaza con tu ID de base de datos
const databaseId = '66cffe2b001f7a114eed'; 

// Reemplaza con el ID de tu colección de usuarios
const usersCollectionId = '66cffe36001d0ca18257';

export { client, account, databases, storage, databaseId, usersCollectionId, ID };