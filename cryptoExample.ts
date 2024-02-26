import crypto from 'crypto'

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // La longitud del módulo, 2048 bits es un buen valor por defecto
    publicKeyEncoding: {
        type: 'spki', // Recomendado para claves públicas
        format: 'pem' // Formato PEM
    },
    privateKeyEncoding: {
        type: 'pkcs8', // Recomendado para claves privadas
        format: 'pem', // Formato PEM
        cipher: 'aes-256-cbc', // Algoritmo de cifrado para proteger la clave privada
        passphrase: 'una contraseña muy segura' // Contraseña para la clave privada
    }
});

// Clave Pública (Public APP ID):
console.log(publicKey)

// 'Clave Privada (API Key):'
console.log(privateKey)