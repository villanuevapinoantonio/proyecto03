/*
1. Queremos agrupar a los jugadores según su número de dorsal, para saber qué jugadores comparten dorsal.
Con este método, obtendremos arrays agrupados con los nombres de los jugadores que comparten dorsal, la cantidad de jugadores
que hay en cada grupo, y se ordenaran de mayor a menor en función de la cantidad de gente que comparta número.
*/

db.nba.aggregate([
    { $group : { _id : "$dorsal", compartendorsal : { $sum : 1 } , nombres: { $addToSet: "$nombre" } } },
    { $sort : { "compartendorsal" : -1, _id: 1 } }
  ])

/*
{ "_id" : 0, "compartendorsal" : 3, "nombres" : [ "Jayson Tatum", "Rusell Westbrook", "Damian Lillard" ] }
{ "_id" : 3, "compartendorsal" : 2, "nombres" : [ "Bradley Beal", "Terry Rozier" ] }
{ "_id" : 11, "compartendorsal" : 2, "nombres" : [ "Domantas Sabonis", "Trae Young" ] }
{ "_id" : 13, "compartendorsal" : 2, "nombres" : [ "Paul George", "James Harden" ] }
{ "_id" : 21, "compartendorsal" : 2, "nombres" : [ "Jrue Holiday", "Joel Embiid" ] }
{ "_id" : 30, "compartendorsal" : 2, "nombres" : [ "Stephen Curry", "Julius Randle" ] }
{ "_id" : 1, "compartendorsal" : 1, "nombres" : [ "Devin Booker" ] }
{ "_id" : 5, "compartendorsal" : 1, "nombres" : [ "De'Aaron Fox" ] }
{ "_id" : 7, "compartendorsal" : 1, "nombres" : [ "Kevin Durant" ] }
{ "_id" : 14, "compartendorsal" : 1, "nombres" : [ "Brandon Ingram" ] }
{ "_id" : 15, "compartendorsal" : 1, "nombres" : [ "Nikola Jokic" ] }
{ "_id" : 33, "compartendorsal" : 1, "nombres" : [ "Tobias Harris" ] }
{ "_id" : 34, "compartendorsal" : 1, "nombres" : [ "Giannis Antetokounmpo" ] }
{ "_id" : 41, "compartendorsal" : 1, "nombres" : [ "Saddiq Bey" ] }
{ "_id" : 44, "compartendorsal" : 1, "nombres" : [ "Bojan Bogdanovic" ] }
{ "_id" : 77, "compartendorsal" : 1, "nombres" : [ "Luka Doncic" ] }
*/

/*
Pretendemos organizar a los jugadores según el año en el que fueron drafteados, ordenándolo de más antiguo a más nuevo,
a fin de conocer las temporadas que cada jugador lleva en la liga.
Así mismo, queremos conocer de cada año la cantidad de jugadores que fueron drafteados y en qué posición fue drafteado cada uno.
El draft se estructura en dos rondas en las que cada equipo tiene en principio derecho a una elección, por lo cual hay un total de 30
elecciones por ronda. Para más sencillez a la hora de entender si un jugador fue una elección más o menos prioritaria en su año,
acompañaremos los datos anteriores de un campo más donde se aclare si fueron elegidos en primera o en segunda ronda. Estos datos se
estructurarán como un documento para cada jugador, ya que son específicos de cada uno.

Obtendremos aparte la media de posicion en la que los jugadores fueron elegidos ese año, a fin de saber en qué año los jugadores más 
"underdogs" (los elegidos más tarde en el draft) fueron capaces de obtener un galardón tan importante como el Player of the Week.
*/

db.nba.aggregate([
    { $group : { _id : "$draft.año", cantidad:{$count:{}},
    drafteados: {$push: { jugador: "$nombre", eleccion: "$draft.eleccion",
    ronda: { $sum: [ {$toInt: { $divide: [ "$draft.eleccion", 30 ] } }, 1 ] }}},
    mediadraft : { $avg:"$draft.eleccion" } } },
    { $sort : {_id: 1 } }
  ])

/*
{ "_id" : 2007, "cantidad" : 1, "drafteados" : [ { "jugador" : "Kevin Durant", "eleccion" : 2, "ronda" : 1 } ], "mediadraft" : 2 }
{ "_id" : 2008, "cantidad" : 1, "drafteados" : [ { "jugador" : "Rusell Westbrook", "eleccion" : 4, "ronda" : 1 } ], "mediadraft" : 4 }
{ "_id" : 2009, "cantidad" : 3, "drafteados" : [ { "jugador" : "Stephen Curry", "eleccion" : 7, "ronda" : 1 }, { "jugador" : "James Harden", "eleccion" : 3, "ronda" : 1 }, { "jugador" : "Jrue Holiday", "eleccion" : 17, "ronda" : 1 } ], "mediadraft" : 9 }
{ "_id" : 2010, "cantidad" : 1, "drafteados" : [ { "jugador" : "Paul George", "eleccion" : 10, "ronda" : 1 } ], "mediadraft" : 10 }
{ "_id" : 2011, "cantidad" : 2, "drafteados" : [ { "jugador" : "Tobias Harris", "eleccion" : 19, "ronda" : 1 }, { "jugador" : "Bojan Bogdanovic", "eleccion" : 31, "ronda" 
: 2 } ], "mediadraft" : 25 }
{ "_id" : 2012, "cantidad" : 2, "drafteados" : [ { "jugador" : "Damian Lillard", "eleccion" : 6, "ronda" : 1 }, { "jugador" : "Bradley Beal", "eleccion" : 3, "ronda" : 1 } ], "mediadraft" : 4.5 }
{ "_id" : 2013, "cantidad" : 1, "drafteados" : [ { "jugador" : "Giannis Antetokounmpo", "eleccion" : 15, "ronda" : 1 } ], "mediadraft" : 15 }
{ "_id" : 2014, "cantidad" : 3, "drafteados" : [ { "jugador" : "Nikola Jokic", "eleccion" : 41, "ronda" : 2 }, { "jugador" : "Joel Embiid", "eleccion" : 3, "ronda" : 1 }, 
{ "jugador" : "Julius Randle", "eleccion" : 7, "ronda" : 1 } ], "mediadraft" : 17 }
{ "_id" : 2015, "cantidad" : 2, "drafteados" : [ { "jugador" : "Devin Booker", "eleccion" : 13, "ronda" : 1 }, { "jugador" : "Terry Rozier", "eleccion" : 16, "ronda" : 1 } ], "mediadraft" : 14.5 }
{ "_id" : 2016, "cantidad" : 2, "drafteados" : [ { "jugador" : "Brandon Ingram", "eleccion" : 2, "ronda" : 1 }, { "jugador" : "Domantas Sabonis", "eleccion" : 11, "ronda" 
: 1 } ], "mediadraft" : 6.5 }
{ "_id" : 2017, "cantidad" : 2, "drafteados" : [ { "jugador" : "Jayson Tatum", "eleccion" : 3, "ronda" : 1 }, { "jugador" : "De'Aaron Fox", "eleccion" : 5, "ronda" : 1 } ], "mediadraft" : 4 }
{ "_id" : 2018, "cantidad" : 2, "drafteados" : [ { "jugador" : "Luka Doncic", "eleccion" : 3, "ronda" : 1 }, { "jugador" : "Trae Young", "eleccion" : 5, "ronda" : 1 } ], "mediadraft" : 4 }
{ "_id" : 2020, "cantidad" : 1, "drafteados" : [ { "jugador" : "Saddiq Bey", "eleccion" : 19, "ronda" : 1 } ], "mediadraft" : 19 }
*/

/*
Se quieren obtener todos aquellos países que tienen por lo menos un jugador nacionalizado que consiguiese un galardón POTW.
*/

db.nba.distinct("nacionalidad")

/*
[
        "Bosnia-Herzegovina",    
        "Camerun",
        "Croacia",
        "EEUU",
        "Eslovenia",
        "Grecia",
        "Lituania",
        "Nigeria",
        "Serbia"
]
*/