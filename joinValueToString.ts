const data = [
  {
    LINEA: 6,
    DOC_ENTRY: 23207,
    OPSAP: 17351,
    CODPT: 'PT0003589',
    CAJA: 'BANDEJA PITAHAYA 4.5KG CORAL FRUITS',
    COD_LPE: 'TRQ00791',
    DETALLE_LAM: 'TROQUEL BANDEJA PITAHAYA NUEVA 4,5 KG',
    GROUP_ART: 114,
    PRECIO_SAP: '0.000000',
    BASE_CANT: '0.495330',
    CANTIDAD: '743.000000',
    BODEGA: '10',
    STOCK: '0.000000',
    TRANSFERIDO: '0.000000',
    ORDEN: 3
  },
  {
    LINEA: 7,
    DOC_ENTRY: 23207,
    OPSAP: 17351,
    CODPT: 'PT0003589',
    CAJA: 'BANDEJA PITAHAYA 4.5KG CORAL FRUITS',
    COD_LPE: 'CLS0000155',
    DETALLE_LAM: 'CLISE BANDEJA PITAHAYA NUEVA 4,5 KG',
    GROUP_ART: 115,
    PRECIO_SAP: '0.000000',
    BASE_CANT: '0.495330',
    CANTIDAD: '743.000000',
    BODEGA: '10',
    STOCK: '0.000000',
    TRANSFERIDO: '0.000000',
    ORDEN: 3
  }
]

function getFormattedPropertyValues(array, property) {
  // Filtra y mapea los valores de la propiedad especificada de cada objeto en el array
  const values = array.map(item => item[property]).filter(value => value !== undefined);
  
  // Formatea los valores como ('valor1', 'valor2', ...)
  const formattedValues = `('${values.join("', '")}')`;
  
  return formattedValues;
}

getFormattedPropertyValues(data, 'COD_LPE')