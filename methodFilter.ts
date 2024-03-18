const data = [
  {
    "Lote": "",
    "Stock": 69.14616,
    "Date": "2024-01-04",
    "CodInsumo": "INS00001",
    "NameInsumo": "ZUNCHO CARTONERO",
    "Status": "T",
    "Grupo": 105,
    "Bodega": "TECASA"
  },
  {
    "Lote": "INQ081123GOMABE-830FBIBC-151411",
    "Stock": 1709.37319,
    "Date": "2024-01-04",
    "CodInsumo": "INS00002",
    "NameInsumo": "GOMA / PEGAMENTO CARTONERO",
    "Status": "T",
    "Grupo": 104,
    "Bodega": "TECASA"
  },
  {
    "Lote": "CT050124NEGRO90-050124-0090",
    "Stock": 36.84,
    "Date": "2024-01-04",
    "CodInsumo": "TIN000027",
    "NameInsumo": "TINTA NEGRO GCMI 90",
    "Status": "T",
    "Grupo": 104,
    "Bodega": "TECASA"
  },
  {
    "Lote": "CT050124NEGRO90-050124-0090",
    "Stock": 18.42,
    "Date": "2024-05-01",
    "CodInsumo": "TIN000027",
    "NameInsumo": "TINTA NEGRO GCMI 90",
    "Status": "Asignado",
    "Grupo": 104,
    "Bodega": "TECASA"
  }
]

data.filter(it => it.CodInsumo === 'TIN000027' && it.Lote === 'CT050124NEGRO90-050124-0090' && it.Status === 'Asignado')