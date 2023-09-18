import { createClient } from 'redis';

const client = createClient({
  url: 'redis://default:dev123@127.0.0.1:6379',
   socket: {
      tls: false
   }
});

client.connect()

client.on('connect', () => {
   console.log(`[${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}] - Redis DB is connect...`)
})

client.on('error', (err) => {
   console.log(`Redis Error: ${err.message}`)
})

client.on('end', () => {
   console.log('Cliente de redis desconectado')
})

async function newSet ({ val = '', id = '' }) {
  try {
    await client.set(id, val, {
      // # horas => seg * min * hour
      // dias => 86400 * dias
      EX: 60 * 10 
    })
  } catch (err) {
    console.error(err);
  } finally {
    // client.quit();
    console.log('Terminó')
  }
}

(async () => {
  const values = { name: 'Carlos', nickname: 'charlsdev' }
  
  newSet({
    id: 'auth',
    val: JSON.stringify(values)
  })
})()

const getVal = async ({ id = '' }) => {
  try {
    return await client.get(id)
  } catch (err) {
    console.error(err);
  } finally {
    //client.quit();
    console.log('Terminó')
  }
}

(async () => {
  const val = await getVal({ id: 'auth' })
  console.log(JSON.parse(val as string))
})()