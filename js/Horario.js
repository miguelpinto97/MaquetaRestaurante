var DiasSemana = [
   {
      "Valor": "0",
      "Dia": "Todos"
   },
   {
      "Valor": "Lunes",
      "Dia": "Lunes"
   },
   {
      "Valor": "Martes",
      "Dia": "Martes"
   },
   {
      "Valor": "Miercoles",
      "Dia": "Miercoles"
   },
   {
      "Valor": "Jueves",
      "Dia": "Jueves"
   },
   {
      "Valor": "Viernes",
      "Dia": "Viernes"
   },
   {
      "Valor": "Sabado",
      "Dia": "Sabado"
   }
];

var CursosDisponibles = [
   {
      "Curso":"Todos los Cursos",
      "CursoCorto":"0",
      "DiasTipos":"LunesPresencial MartesPresencial MiercolesPresencial JuevesPresencial ViernesPresencial SabadoPresencial",
      "Dias":"Lunes Martes Miercoles Jueves Viernes Sabado",
      "Tipos":"Presencial"
   },
   //{ "Curso": "Antiguo Testamento 1A", "CursoCorto": "AntiguoTestamento1A", "DiasTipos": "MartesVirtual", "Dias": "Martes", "Tipos": "Virtual" },
   { "Curso": "Coro Avanzado A", "CursoCorto": "CoroAvanzadoA", "DiasTipos": "JuevesVirtual MiercolesVirtual", "Dias": "Jueves Miercoles", "Tipos": "Virtual" },
   { "Curso": "Doctrina y Convenios 2 B", "CursoCorto": "DoctrinayConvenios2B", "DiasTipos": "MartesVirtual", "Dias": "Martes", "Tipos": "Virtual" },
   { "Curso": "Edifiquemos un Matrimonio Eterno A", "CursoCorto": "EdifiquemosunMatrimonioEternoA", "DiasTipos": "MartesVirtual MiercolesVirtual", "Dias": "Martes Miercoles", "Tipos": "Virtual" },
   { "Curso": "El Divino Don de Perdon Parte A", "CursoCorto": "ElDivinoDondePerdonParteA", "DiasTipos": "LunesVirtual MiercolesVirtual", "Dias": "Lunes Miercoles", "Tipos": "Virtual" },
   { "Curso": "El Divino Don del Perdon parte B", "CursoCorto": "ElDivinoDondelPerdonparteB", "DiasTipos": "SabadoPresencial", "Dias": "Sabado", "Tipos": "Presencial" },
   { "Curso": "El Evangelio y la Vida Productiva A", "CursoCorto": "ElEvangelioylaVidaProductivaA", "DiasTipos": "SabadoVirtual MiercolesPresencial", "Dias": "Sabado Miercoles", "Tipos": "Virtual Presencial" },
   { "Curso": "Enseñanzas y Doctrina del Libro de Mormon A", "CursoCorto": "EnseñanzayDoctrinadelLibrodeMormonA", "DiasTipos": "ViernesVirtual ViernesPresencial SabadoPresencial SabadoVirtual", "Dias": "Viernes Sabado", "Tipos": "Virtual Presencial" }
   ,
   { "Curso": "Enseñanzas de los profetas vivientes A", "CursoCorto": "EnseñanzasdelosprofetasvivientesA", "DiasTipos": "MartesVirtual", "Dias": "Martes", "Tipos": "Virtual" }
   ,
   { "Curso": "Enseñanzas del presidente Nelson A", "CursoCorto": "EnseñanzasdelpresidenteNelsonA", "DiasTipos": "JuevesVirtual SabadoVirtual", "Dias": "Jueves Sabado", "Tipos": "Virtual" }
   ,
   { "Curso": "Fundamentos de la Restauracion A", "CursoCorto": "FundamentosdelaRestauracionA", "DiasTipos": "MartesVirtual MiercolesVirtual", "Dias": "Martes Miercoles", "Tipos": "Virtual" },
   { "Curso": "Introduccion a la Historia Familiar A", "CursoCorto": "IntroduccionalaHistoriaFamiliarA", "DiasTipos": "MartesVirtual", "Dias": "Martes", "Tipos": "Virtual" },
   { "Curso": "Jesucristo y el Evangelio Sempiterno A", "CursoCorto": "JesucristoyelEvangelioSempiternoA", "DiasTipos": "MartesVirtual JuevesPresencial JuevesVirtual ViernesVirtual SabadoVirtual", "Dias": "Martes Jueves Viernes Sabado", "Tipos": "Virtual Presencial" },
   { "Curso": "La Familia Eterna A", "CursoCorto": "LaFamiliaEternaA", "DiasTipos": "JuevesVirtual ViernesPresencial SabadoVirtual", "Dias": "Jueves Viernes Sabado", "Tipos": "Virtual Presencial" },
   { "Curso": "Las Mujeres de las escrituras B", "CursoCorto": "LasMujeresdelasescriturasB", "DiasTipos": "MartesVirtual", "Dias": "Martes", "Tipos": "Virtual" },
   { "Curso": "Las Parabolas de Jesus A", "CursoCorto": "LasParabolasdeJesusA", "DiasTipos": "ViernesVirtual SabadoVirtual SabadoPresencial", "Dias": "Viernes Sabado", "Tipos": "Virtual Presencial" },
   { "Curso": "Las parabolas de Jesus B", "CursoCorto": "LasparabolasdeJesusB", "DiasTipos": "MartesPresencial", "Dias": "Martes", "Tipos": "Presencial" },
   { "Curso": "Libro de Mormon 1A", "CursoCorto": "LibrodeMormon1A", "DiasTipos": "MartesVirtual MiercolesVirtual", "Dias": "Martes Miercoles", "Tipos": "Virtual" },
   { "Curso": "Mujeres de las escrituras A", "CursoCorto": "MujeresdelasescriturasA", "DiasTipos": "MartesPresencial MiercolesPresencial", "Dias": "Martes Miercoles", "Tipos": "Presencial" },
   { "Curso": "Nuevo Testamento 1A", "CursoCorto": "NuevoTestamento1A", "DiasTipos": "MartesVirtual JuevesVirtual SabadoVirtual", "Dias": "Martes Jueves Sabado", "Tipos": "Virtual" },
   { "Curso": "Preparacion Misional (por temas)", "CursoCorto": "PreparacionMisional", "DiasTipos": "SabadoVirtual", "Dias": "Sabado", "Tipos": "Virtual" },
   { "Curso": "Preparemonos para un matrimonio Eterno A", "CursoCorto": "PreparemonosparaunmatrimonioEternoA", "DiasTipos": "MartesVirtual SabadoPresencial SabadoVirtual", "Dias": "Martes Sabado", "Tipos": "Virtual Presencial" }
]
   ;


var Horarios = [
   {"Dia":"Lunes","Hora":"06:00 AM","Maestro":"Veronica Bardales Velasquez","Curso":"El Divino Don de Perdon Parte A","CursoCorto":"ElDivinoDondePerdonParteA","Tipo":"Virtual","NombreImagen":"veronica","LinkWhatsapp":"https://chat.whatsapp.com/CgOuq7txMIEEz98z4GkEV3","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201419"},
   {"Dia":"Martes","Hora":"04:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Libro de Mormon 1A","CursoCorto":"LibrodeMormon1A","Tipo":"Virtual","NombreImagen":"elizabeth","LinkWhatsapp":"https://chat.whatsapp.com/GCcbghp51SAEjB7AW3LRkP","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201420"},
   {"Dia":"Martes","Hora":"06:00 PM","Maestro":"Linda Medina Morales","Curso":"Enseñanzas de los profetas vivientes A","CursoCorto":"EnseñanzasdelosprofetasvivientesA","Tipo":"Virtual","NombreImagen":"linda","LinkWhatsapp":"https://chat.whatsapp.com/IEeDQwHVkrT5mzF9VqF1gr","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201421"}
   ,
   {"Dia":"Martes","Hora":"07:00 PM","Maestro":"Rocio Reyes","Curso":"Las Mujeres de las escrituras B","CursoCorto":"LasMujeresdelasescriturasB","Tipo":"Virtual","NombreImagen":"rocio","LinkWhatsapp":"https://chat.whatsapp.com/FeVTVuPbCtKKJ4Lt9caw5Y","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201425"},
   {"Dia":"Martes","Hora":"07:00 PM","Maestro":"Gian Pierre Lazo Chavez","Curso":"Fundamentos de la Restauracion A","CursoCorto":"FundamentosdelaRestauracionA","Tipo":"Virtual","NombreImagen":"gian","LinkWhatsapp":"https://chat.whatsapp.com/HPfXMQLbrtUAGrzJRrdsPj","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201423"},
   {"Dia":"Martes","Hora":"07:00 PM","Maestro":"Alejandro David Piscoya Leng","Curso":"Jesucristo y el Evangelio Sempiterno A","CursoCorto":"JesucristoyelEvangelioSempiternoA","Tipo":"Virtual","NombreImagen":"alejandro","LinkWhatsapp":"https://chat.whatsapp.com/G3BgbjLt4qOCgFCS5OwfqZ","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201424"},
   {"Dia":"Martes","Hora":"07:30 PM","Maestro":"Miguel Herrera","Curso":"Mujeres de Las Escrituras A","CursoCorto":"MujeresdeLasEscriturasA","Tipo":"Presencial","NombreImagen":"miguel herrera","LinkWhatsapp":"https://chat.whatsapp.com/INTSxWFX3D88UDCwgiLned","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201501"},
   {"Dia":"Martes","Hora":"07:30 PM","Maestro":"Luis Antonio Salazar Marcelo","Curso":"Nuevo Testamento 1A","CursoCorto":"NuevoTestamento1A","Tipo":"Virtual","NombreImagen":"luis salazar","LinkWhatsapp":"https://chat.whatsapp.com/CWjfGXV9JXt0NEXLxgRkpV","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201426"},
   {"Dia":"Martes","Hora":"07:30 PM","Maestro":"Antonio Vera","Curso":"Las parabolas de Jesus B","CursoCorto":"LasparabolasdeJesusB","Tipo":"Presencial","NombreImagen":"antonio","LinkWhatsapp":"https://chat.whatsapp.com/HkCrJ2RDlCXK8n0zrYSgoO","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201502"},
   {"Dia":"Martes","Hora":"08:00 PM","Maestro":"Victor Calderon","Curso":"Doctrina y Convenios 2 B","CursoCorto":"DoctrinayConvenios2B","Tipo":"Virtual","NombreImagen":"victor","LinkWhatsapp":"https://chat.whatsapp.com/DnSJyeHTFYsHWSBTWrWSEG","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201435"},
   {"Dia":"Martes","Hora":"08:00 PM","Maestro":"Nancy Julca Urbina","Curso":"Preparemonos para un matrimonio Eterno A","CursoCorto":"PreparemonosparaunmatrimonioEternoA","Tipo":"Virtual","NombreImagen":"nancy","LinkWhatsapp":"https://chat.whatsapp.com/F28BA5f5yamBSllzv6PrS4","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201428"},
   {"Dia":"Martes","Hora":"08:00 PM","Maestro":"Ivan Briceño Castro","Curso":"Edifiquemos un Matrimonio Eterno A","CursoCorto":"EdifiquemosunMatrimonioEternoA","Tipo":"Virtual","NombreImagen":"ivan","LinkWhatsapp":"https://chat.whatsapp.com/FBocQKbJkou8WlMS8IbutV","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201429"}
   ,
   {"Dia":"Martes","Hora":"08:30 PM","Maestro":"Piero Alfredo Guzman Mora","Curso":"Nuevo Testamento 1A","CursoCorto":"NuevoTestamento1A","Tipo":"Virtual","NombreImagen":"piero","LinkWhatsapp":"https://chat.whatsapp.com/JnHHqtYjPCdBlV3W0DhfXk","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201439"},
   {"Dia":"Martes","Hora":"08:30 PM","Maestro":"Monica Isabel Gonzales Perez","Curso":"Introduccion a la Historia Familiar A","CursoCorto":"IntroduccionalaHistoriaFamiliarA","Tipo":"Virtual","NombreImagen":"monica","LinkWhatsapp":"https://chat.whatsapp.com/LXUR7sWkGRA8L75CTPTmTQ","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201441"},
   {"Dia":"Miercoles","Hora":"07:00 PM","Maestro":"Kenny Quispitupac","Curso":"Mujeres de las escrituras A","CursoCorto":"MujeresdelasescriturasA","Tipo":"Presencial","NombreImagen":"kenny","LinkWhatsapp":"https://chat.whatsapp.com/HjMBtAxDaYaDFboLgzYkum","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201594"},
   {"Dia":"Miercoles","Hora":"07:00 PM","Maestro":"Emanuel Rodriguez Fernandez","Curso":"Coro Avanzado A","CursoCorto":"CoroAvanzadoA","Tipo":"Virtual","NombreImagen":"emanuel","LinkWhatsapp":"https://chat.whatsapp.com/DC1SXyaHmMfK6ysfiEjqbb","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201960"},
   {"Dia":"Miercoles","Hora":"08:00 PM","Maestro":"Sahara Jara  Casazola","Curso":"Fundamentos de la Restauracion A","CursoCorto":"FundamentosdelaRestauracionA","Tipo":"Virtual","NombreImagen":"sahara","LinkWhatsapp":"https://chat.whatsapp.com/LNfxeS2fVXuIhEil8xYtvB","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201443"},
   {"Dia":"Miercoles","Hora":"08:00 PM","Maestro":"Marvin Huertas","Curso":"El Evangelio y la Vida Productiva A","CursoCorto":"ElEvangelioylaVidaProductivaA","Tipo":"Presencial","NombreImagen":"marvin","LinkWhatsapp":"https://chat.whatsapp.com/ETF1uFRyYnE59DHKudbofJ","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201595"},
   {"Dia":"Miercoles","Hora":"08:00 PM","Maestro":"Carlos Alberto Pujay Ortiz","Curso":"Libro de Mormon 1A","CursoCorto":"LibrodeMormon1A","Tipo":"Virtual","NombreImagen":"carlos pujay","LinkWhatsapp":"https://chat.whatsapp.com/IChjdk1IuFGK0CAFbYY9Ll","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201444"},
   {"Dia":"Miercoles","Hora":"08:30 PM","Maestro":"Manuel y Tatiana Navarro","Curso":"Edifiquemos un Matrimonio Eterno A","CursoCorto":"EdifiquemosunMatrimonioEternoA","Tipo":"Virtual","NombreImagen":"manuel","LinkWhatsapp":"https://chat.whatsapp.com/GzxOvMK5G8u2coWAcqmRvC","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201445"},
   {"Dia":"Miercoles","Hora":"08:30 PM","Maestro":"Luis Flores Leon","Curso":"El Divino Don de Perdon Parte A","CursoCorto":"ElDivinoDondePerdonParteA","Tipo":"Virtual","NombreImagen":"luis flores 2","LinkWhatsapp":"https://chat.whatsapp.com/CKc87Rxgl8XK7AwWoQDu48","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201446"},
   {"Dia":"Jueves","Hora":"04:00 PM","Maestro":"Elizabeth Blanca Cuadros Loayza","Curso":"Nuevo Testamento 1A","CursoCorto":"NuevoTestamento1A","Tipo":"Virtual","NombreImagen":"elizabeth","LinkWhatsapp":"https://chat.whatsapp.com/HzZaoe9XvQb9MT0Sbju0rB","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201447"},
   {"Dia":"Jueves","Hora":"07:00 PM","Maestro":"Roberto Polanco","Curso":"La Familia Eterna A","CursoCorto":"LaFamiliaEternaA","Tipo":"Virtual","NombreImagen":"roberto polanco","LinkWhatsapp":"https://chat.whatsapp.com/KfunV3ZI1Q7GxgYtTsRL9C","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201450"},
   {"Dia":"Jueves","Hora":"07:00 PM","Maestro":"Roberto Pacheco","Curso":"Jesucristo y el Evangelio Sempiterno A","CursoCorto":"JesucristoyelEvangelioSempiternoA","Tipo":"Presencial","NombreImagen":"roberto pacheco","LinkWhatsapp":"https://chat.whatsapp.com/KafFimDd9rxKPGQ81MRwRn","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201598"},
   {"Dia":"Jueves","Hora":"07:00 PM","Maestro":"Joshua Hidalgo Esquivel","Curso":"Jesucristo y el Evangelio Sempiterno A","CursoCorto":"JesucristoyelEvangelioSempiternoA","Tipo":"Virtual","NombreImagen":"joshua","LinkWhatsapp":"https://chat.whatsapp.com/GXj5E1tKiGcIConBnuv2l8","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201448"},
   {"Dia":"Jueves","Hora":"07:30 PM","Maestro":"Enrique Aramis Cordova Torres","Curso":"Coro Avanzado A","CursoCorto":"CoroAvanzadoA","Tipo":"Virtual","NombreImagen":"enrique","LinkWhatsapp":"https://chat.whatsapp.com/JlXDPs7MbqZ0W0nSGWhX6L","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201452"},
   {"Dia":"Jueves","Hora":"08:30 PM","Maestro":"Lesseps Gonzales Ravines","Curso":"Familia Eterna A","CursoCorto":"LaFamiliaEternaA","Tipo":"Virtual","NombreImagen":"lesseps","LinkWhatsapp":"https://chat.whatsapp.com/Gqjd1rXfDpCIPEyi401f8Z","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201453"},
   {"Dia":"Jueves","Hora":"09:00 PM","Maestro":"Luis Flores Leon","Curso":"Enseñanzas del presidente Nelson A","CursoCorto":"EnseñanzasdelpresidenteNelsonA","Tipo":"Virtual","NombreImagen":"luis flores 2","LinkWhatsapp":"https://chat.whatsapp.com/FCgtdUawHgnDytKFNanI8x","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201456"}
   ,
   {"Dia":"Viernes","Hora":"07:00 PM","Maestro":"Juan Landa","Curso":"La Familia Eterna A","CursoCorto":"LaFamiliaEternaA","Tipo":"Presencial","NombreImagen":"juan","LinkWhatsapp":"https://chat.whatsapp.com/J2oCn1ceCruCubnc0xytJ0","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201599"},
   {"Dia":"Viernes","Hora":"08:00 PM","Maestro":"Rudy Serna Cajaleon","Curso":"Enseñanzas y Doctrina del Libro de Mormon A","CursoCorto":"EnseñanzayDoctrinadelLibrodeMormonA","Tipo":"Virtual","NombreImagen":"rudy","LinkWhatsapp":"https://chat.whatsapp.com/IIKXpwdWiEsFc1Mn4Z9fWS","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201458"}
   ,
   {"Dia":"Viernes","Hora":"08:00 PM","Maestro":"Carlos Alfredo Rodriguez Tito","Curso":"Jesucristo y el Evangelio Sempiterno A","CursoCorto":"JesucristoyelEvangelioSempiternoA","Tipo":"Virtual","NombreImagen":"carlos rodriguez","LinkWhatsapp":"https://chat.whatsapp.com/BbZDGLM3kPWJO9Tk5cnw1d","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201934"},
   {"Dia":"Viernes","Hora":"08:00 PM","Maestro":"Anyd Santillan","Curso":"Enseñanzas y Doctrina del Libro de Mormon A","CursoCorto":"EnseñanzayDoctrinadelLibrodeMormonA","Tipo":"Presencial","NombreImagen":"anyd","LinkWhatsapp":"https://chat.whatsapp.com/BkjDgXM99Q2E4JYWvYQXzu","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201601"}
   ,
   {"Dia":"Viernes","Hora":"08:30 PM","Maestro":"Erick John Rojas Cornejo","Curso":"Las Parabolas de Jesus A","CursoCorto":"LasParabolasdeJesusA","Tipo":"Virtual","NombreImagen":"erick","LinkWhatsapp":"https://chat.whatsapp.com/HxPdjuZOWBP8XAq68DPIYZ","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201459"},
   {"Dia":"Sabado","Hora":"07:00 AM","Maestro":"Moises Mamani Molina","Curso":"La Familia Eterna A","CursoCorto":"LaFamiliaEternaA","Tipo":"Virtual","NombreImagen":"moises","LinkWhatsapp":"https://chat.whatsapp.com/LwVES7DOxNIKUnFY7XTGox","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201485"},
   {"Dia":"Sabado","Hora":"07:00 AM","Maestro":"Aaron Pablo Escate Cabides","Curso":"Jesucristo y el Evangelio Sempiterno A","CursoCorto":"JesucristoyelEvangelioSempiternoA","Tipo":"Virtual","NombreImagen":"aaron","LinkWhatsapp":"https://chat.whatsapp.com/CrYopOULoeoF0qF8MpVIdn","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201483"},
   {"Dia":"Sabado","Hora":"12:00 PM","Maestro":"Carlos Rojas Baltazar","Curso":"Las Parabolas de Jesus A","CursoCorto":"LasParabolasdeJesusA","Tipo":"Virtual","NombreImagen":"carlos rojas","LinkWhatsapp":"https://chat.whatsapp.com/J31MLGTVLBf0IzdlQL5yHL","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201486"},
   {"Dia":"Sabado","Hora":"04:00 PM","Maestro":"Miguel Pinto","Curso":"Enseñanzas y Doctrina del Libro de Mormon A","CursoCorto":"EnseñanzayDoctrinadelLibrodeMormonA","Tipo":"Presencial","NombreImagen":"miguel pinto","LinkWhatsapp":"https://chat.whatsapp.com/LMv2wsv0856GZJQHqG02jv","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201602"}
   ,
   {"Dia":"Sabado","Hora":"04:00 PM","Maestro":"Mario Suares Romero","Curso":"Enseñanzas y Doctrina del Libro de Mormon A","CursoCorto":"EnseñanzayDoctrinadelLibrodeMormonA","Tipo":"Virtual","NombreImagen":"mario","LinkWhatsapp":"https://chat.whatsapp.com/Hj7ZxpUScaGJybcPVjw7Fj","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201487"},
   {"Dia":"Sabado","Hora":"05:30 PM","Maestro":"Luis Flores","Curso":"El Divino Don del Perdon parte B","CursoCorto":"ElDivinoDondelPerdonparteB","Tipo":"Presencial","NombreImagen":"luis flores 1","LinkWhatsapp":"https://chat.whatsapp.com/LWSughJpoOdIogkpH4yl5j","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201603"},
   {"Dia":"Sabado","Hora":"06:00 PM","Maestro":"Eder Silvera Rivas","Curso":"El Evangelio y la Vida Productiva A","CursoCorto":"ElEvangelioylaVidaProductivaA","Tipo":"Virtual","NombreImagen":"eder","LinkWhatsapp":"https://chat.whatsapp.com/DKNqZPISHV23SOjgQVFl0W","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201488"},
   {"Dia":"Sabado","Hora":"07:00 PM","Maestro":"Dayne Esteban","Curso":"Las Parabolas de Jesus A","CursoCorto":"LasParabolasdeJesusA","Tipo":"Presencial","NombreImagen":"dayne","LinkWhatsapp":"https://chat.whatsapp.com/DiXlEhBxpvp5eCF2TmZaKs","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201604"},
   {"Dia":"Sabado","Hora":"07:00 PM","Maestro":"Alex y Flor Arangoitia","Curso":"Preparemonos para un matrimonio Eterno A","CursoCorto":"PreparemonosparaunmatrimonioEternoA","Tipo":"Presencial","NombreImagen":"alex","LinkWhatsapp":"https://chat.whatsapp.com/EiSJt9F4bXK99g7QD0Jr6E","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201605"},
   {"Dia":"Sabado","Hora":"08:00 PM","Maestro":"Sandra Tacza Lume","Curso":"Preparacion Misional (por temas)","CursoCorto":"PreparacionMisional","Tipo":"Virtual","NombreImagen":"sandra tacza","LinkWhatsapp":"https://chat.whatsapp.com/GTU8XXW0p3ZAg1gtRasqkh","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201490"},
   {"Dia":"Sabado","Hora":"08:00 PM","Maestro":"Luis Flores Leon","Curso":"Enseñanzas del presidente Nelson A","CursoCorto":"EnseñanzasdelpresidenteNelsonA","Tipo":"Virtual","NombreImagen":"luis flores 2","LinkWhatsapp":"https://chat.whatsapp.com/DuqtpQnk1gDLLm6bIjPxq9","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201494"}
   ,
   {"Dia":"Sabado","Hora":"08:00 PM","Maestro":"Joseph Arthur Balta Benavides","Curso":"Enseñanzas y Doctrina del Libro de Mormon A","CursoCorto":"EnseñanzayDoctrinadelLibrodeMormonA","Tipo":"Virtual","NombreImagen":"joseph","LinkWhatsapp":"https://chat.whatsapp.com/JuFngduhUtqKbVANSINqZH","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201491"}
   ,
   {"Dia":"Sabado","Hora":"08:00 PM","Maestro":"Gabriel Arturo Romero Perico","Curso":"Jesucristo y el Evangelio Sempiterno A","CursoCorto":"JesucristoyelEvangelioSempiternoA","Tipo":"Virtual","NombreImagen":"gabriel","LinkWhatsapp":"https://chat.whatsapp.com/CdbpqFHZX2xBdTvfL00R2j","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201489"},
   {"Dia":"Sabado","Hora":"08:00 PM","Maestro":"Felix Scott Balta Benavides","Curso":"Nuevo Testamento 1A","CursoCorto":"NuevoTestamento1A","Tipo":"Virtual","NombreImagen":"felix","LinkWhatsapp":"https://chat.whatsapp.com/JlagIPqzBgK1Vas6sZG2jw","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201493"},
   {"Dia":"Sabado","Hora":"08:30 PM","Maestro":"Sandra Paola Pino Huaman","Curso":"Preparemonos para un matrimonio Eterno A","CursoCorto":"PreparemonosparaunmatrimonioEternoA","Tipo":"Virtual","NombreImagen":"sandra pino","LinkWhatsapp":"https://chat.whatsapp.com/BXgymzy5mpx1MIaLQrXlkN","LinkInscripcion":"https://myinstitute.churchofjesuschrist.org/classes?add=1201495"}
   ];
   