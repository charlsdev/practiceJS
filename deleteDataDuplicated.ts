const ITEMS = [
   {
      LINEA: 0,
      PT: 'IMP.  MACARBOX 2',
      GROUP_ART: 0,
      BASE_CANT: 0.00032,
      CANTIDAD: 0.64,
      BODEGA: '06'
   }, {
      LINEA: 1,
      PT: 'CLS0000173',
      GROUP_ART: 115,
      BASE_CANT: 1,
      CANTIDAD: 2000,
      BODEGA: '10'
   }, {
      LINEA: 2,
      PT: 'TIN000031',
      GROUP_ART: 104,
      BASE_CANT: 0.001,
      CANTIDAD: 2,
      BODEGA: '06'
   }, {
      LINEA: 3,
      PT: 'LPE0003722',
      GROUP_ART: 124,
      BASE_CANT: 1,
      CANTIDAD: 2000,
      BODEGA: '06'
   }
]


let seenGroupArt = new Set()
      
ITEMS.filter(item => {   
   if (item.GROUP_ART === 0) {
      if (seenGroupArt.has(item.GROUP_ART)) {
         return false // Si ya se ha visto GROUP_ART 0, lo filtramos
      }

      seenGroupArt.add(item.GROUP_ART) // Marca GROUP_ART 0 como visto
   }

   return true // Mantenemos todos los demás items
})

console.log(ITEMS)