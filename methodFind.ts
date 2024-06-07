const item = [
    {
      LINEA: 0,
      PT: 'IMP.  MACARBOX 1',
      GROUP_ART: 0,
      BASE_CANT: 0,
      CANTIDAD: 0.0075,
      BODEGA: '06'
    },
    {
      LINEA: 1,
      PT: 'LPE0002791',
      GROUP_ART: 124,
      BASE_CANT: 0.08333,
      CANTIDAD: 250,
      BODEGA: '06'
    },
    {
      LINEA: 2,
      PT: 'INS00001',
      GROUP_ART: 105,
      BASE_CANT: 0.00001,
      CANTIDAD: 0.04,
      BODEGA: '06'
    },
    {
      LINEA: 3,
      PT: 'TRQ02791',
      GROUP_ART: 114,
      BASE_CANT: 0.08333,
      CANTIDAD: 250,
      BODEGA: '10'
    }
  ]


//item.sort((a, b) => a.GROUP_ART - b.GROUP_ART)

item.find(it => it.GROUP_ART === 0)?.PT
