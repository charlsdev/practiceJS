/*{
    LINEA: 1,
    DOC_ENTRY: 19528,
    OPSAP: 14418,
    CODPT: 'PT0003874',
    CAJA: 'FONDO MAJOFRUT BANANO',
    COD_LPE: 'TIN000011',
    DETALLE_LAM: 'TINTA AZUL GCMI 33',
    GROUP_ART: 104,
    PRECIO_SAP: '5.200000',
    BASE_CANT: '0.001000',
    CANTIDAD: '11.000000',
    BODEGA: '06',
    STOCK: '80.000000',
    TRANSFERIDO: '0.000000',
    ORDEN: 1
}*/


export const decimalesToHours = (decimal: number) => {
   const horas = Math.floor(decimal)
   console.log(horas)
   const minutos = Math.round((decimal - horas) * 60)
   console.log(minutos)

   const horasStr = horas.toString().padStart(2, '0')
   const minutosStr = minutos.toString().padStart(2, '0')

   return `${horasStr}:${minutosStr}:00`
}

decimalesToHours(0.15)

// 1 = 60min
// 0.50 = 30min
// 0.25 = 15min