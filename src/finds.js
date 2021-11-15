/* 
1. Aquellos jugadores que juegan en un equipo concreto, en este caso los Sixers.
*/

db.nba.find({equipo:"Philadelphia Sixers"})

/*
{ "_id" : 4, "nombre" : "Tobias Harris", "posicion" : [ "AL", "AP" ], "equipo" : "Philadelphia Sixers", "dorsal" : 33, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks", "Orlando Magic", "Detroit Pistons", "Los Angeles Clippers", "Philadelphia Sixers" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "previo" : "Tennessee", "año" : 2011, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 10, "nombre" : "Joel Embiid", "posicion" : [ "P" ], "equipo" : "Philadelphia Sixers", "dorsal" : 21, "fechapotw" : [ ISODate("2021-01-25T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "previo" : "Kansas", "año" : 2014, "eleccion" : 3 }, "nacionalidad" : [ "Camerun" ] }
*/

/*
2. Aquellos jugadores que comparten una posición, en este caso bases.
*/

db.nba.find({posicion:"BA"} )

/*
{ "_id" : 3, "nombre" : "Stephen Curry", "posicion" : [ "BA", "ES" ], "equipo" : "Golden State Warriors", "dorsal" : 30, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z"), ISODate("2021-01-19T00:00:00Z") ], "trayectoria" : [ "Golden State Warriors" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "Davidson", "año" : 2009, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 7, "nombre" : "Damian Lillard", "posicion" : [ "BA", "ES" ], "equipo" : "Portland Trail Blazers", "dorsal" : 0, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z"), ISODate("2021-02-22T00:00:00Z"), ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Portland Trail Blazers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 2 }, "draft" : { "previo" : "Weber State", "año" : 2012, "eleccion" : 6 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 12, "nombre" : "De'Aaron Fox", "posicion" : [ "BA" ], "equipo" : "Sacramento Kings", "dorsal" : 5, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Sacramento Kings" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "Kentucky", "año" : 2017, "eleccion" : 5 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 16, "nombre" : "Terry Rozier", "posicion" : [ "BA", "ES" ], "equipo" : "Charlotte Hornets", "dorsal" : 3, "fechapotw" : [ ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Boston Celtics", "Charlotte Hornets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "previo" : "Louisville", "año" : 2015, "eleccion" : 16 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 17, "nombre" : "Jrue Holiday", "posicion" : [ "BA", "ES" ], "equipo" : "Milwaukee Bucks", "dorsal" : 21, "fechapotw" : [ ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers", "New Orleans Pelicans", "Milwaukee Bucks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 4 }, "draft" : { "previo" : "UCLA", "año" : 2009, "eleccion" : 17 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 22, "nombre" : "Rusell Westbrook", "posicion" : [ "BA", "ES" ], "equipo" : "Washington Wizards", "dorsal" : 0, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Washington Wizards" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "UCLA", "año" : 2008, "eleccion" : 4 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 23, "nombre" : "Trae Young", "posicion" : [ "BA" ], "equipo" : "Atlanta Hawks", "dorsal" : 11, "fechapotw" : [ ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Atlanta Hawks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "previo" : "Oklahoma", "año" : 2018, "eleccion" : 5 }, "nacionalidad" : [ "EEUU" ] }
*/

/*
2.2. Similar al caso anterior, pero ahora queremos saber cuáles son SOLO bases, es decir, solo tienen esa posición.
*/

db.nba.find( {posicion: {$eq: ["BA"]} })

/*
{ "_id" : 12, "nombre" : "De'Aaron Fox", "posicion" : [ "BA" ], "equipo" : "Sacramento Kings", "dorsal" : 5, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Sacramento Kings" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "Kentucky", "año" : 2017, "eleccion" : 5 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 23, "nombre" : "Trae Young", "posicion" : [ "BA" ], "equipo" : "Atlanta Hawks", "dorsal" : 11, "fechapotw" : [ ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Atlanta Hawks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "previo" : "Oklahoma", "año" : 2018, "eleccion" : 5 }, "nacionalidad" : [ "EEUU" ] }
*/

/*
3. Aquellos jugadores cuyo nombre empieza por una letra (o un conjunto de ellas) en concreto, en este caso J.
*/

db.nba.find( { nombre: { $regex: /^J/i } } )

/*
{ "_id" : 6, "nombre" : "Jayson Tatum", "posicion" : [ "AL" ], "equipo" : "Boston Celtics", "dorsal" : 0, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-12T00:00:00Z"), ISODate("2021-05-03T00:00:00Z") ], "trayectoria" : [ "Boston Celtics" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "previo" : "Duke", "año" : 2017, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 10, "nombre" : "Joel Embiid", "posicion" : [ "P" ], "equipo" : "Philadelphia Sixers", "dorsal" : 21, "fechapotw" : [ ISODate("2021-01-25T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "previo" : "Kansas", "año" : 2014, "eleccion" : 3 }, "nacionalidad" : [ "Camerun" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Ocklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" 
: { "previo" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : "EEUU" }
{ "_id" : 17, "nombre" : "Jrue Holiday", "posicion" : [ "BA", "ES" ], "equipo" : "Milwaukee Bucks", "dorsal" : 21, "fechapotw" : [ ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers", "New Orleans Pelicans", "Milwaukee Bucks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 4 }, "draft" : { "previo" : "UCLA", "año" : 2009, "eleccion" : 17 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 19, "nombre" : "Julius Randle", "posicion" : [ "AP" ], "equipo" : "New York Knicks", "dorsal" : 30, "fechapotw" : [ ISODate("2021-04-19T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans", "New York Knicks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 9 }, "draft" : { "previo" : "Kentucky", 
"año" : 2014, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }

Nota: La introducción de la opción "i" se ha realizado para que no se tenga en cuenta si la J es mayúscula o minúscula.
Aunque en este caso era innecesario, ya que todos los nombres introducidos empiezan por mayúscula, es una buena práctica
ponerlo para casos en los que esto no sea así. 
*/

/*
4. Aquellos jugadores que han jugado en un equipo concreto a lo largo de su carrera, por ejemplo en Oklahoma City Thunder.
*/

db.nba.find({trayectoria: "Oklahoma City Thunder"})

/*
{ "_id" : 2, "nombre" : "Domantas Sabonis", "posicion" : [ "AP" ], "equipo" : "Indiana Pacers", "dorsal" : 11, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Indiana Pacers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, "draft" : { "previo" : "Gonzaga", "año" : 2016, "eleccion" : 11 }, "nacionalidad" : [ "EEUU", "Lituania" ] }
{ "_id" : 8, "nombre" : "Kevin Durant", "posicion" : [ "AL" ], "equipo" : "Brooklyn Nets", "dorsal" : 7, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z") ], "trayectoria" : [ "Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 10 }, "draft" : { "previo" : "Texas", "año" : 2007, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "previo" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : "EEUU" }
{ "_id" : 18, "nombre" : "Paul George", "posicion" : [ "ES", "AL" ], "equipo" : "Los Angeles Clippers", "dorsal" : 13, "fechapotw" : [ ISODate("2021-04-12T00:00:00Z") ], "trayectoria" : [ "Indiana Pacers", "Oklahoma City Thunder", "Los Angeles Clippers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "previo" : "Fresno State", "año" : 2010, "eleccion" : 10 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 22, "nombre" : "Rusell Westbrook", "posicion" : [ "BA", "ES" ], "equipo" : "Washington Wizards", "dorsal" : 0, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Washington Wizards" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "UCLA", "año" : 2008, "eleccion" : 4 }, "nacionalidad" : [ "EEUU" ] }
*/

/*
4.2 Modificamos la búsqueda anterior para limitarla a los jugadores cuyo primer equipo fue los OCT.
*/

db.nba.find({"trayectoria.0": "Oklahoma City Thunder"})

/*
{ "_id" : 2, "nombre" : "Domantas Sabonis", "posicion" : [ "AP" ], "equipo" : "Indiana Pacers", "dorsal" : 11, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Indiana Pacers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, "draft" : { "previo" : "Gonzaga", "año" : 2016, "eleccion" : 11 }, "nacionalidad" : [ "EEUU", "Lituania" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "previo" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : "EEUU" }
{ "_id" : 22, "nombre" : "Rusell Westbrook", "posicion" : [ "BA", "ES" ], "equipo" : "Washington Wizards", "dorsal" : 0, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Washington Wizards" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "UCLA", "año" : 2008, "eleccion" : 4 }, "nacionalidad" : [ "EEUU" ] }
*/

/*
4.3 Modificamos de nuevo la primera búsqueda (4.1) para que se limite a aquellos jugadores que han pasado tanto 
por los OCT como por los Brooklyn Nets.
*/

db.nba.find({trayectoria: { $all: [ "Oklahoma City Thunder", "Brooklyn Nets" ] }})

/*
{ "_id" : 8, "nombre" : "Kevin Durant", "posicion" : [ "AL" ], "equipo" : "Brooklyn Nets", "dorsal" : 7, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z") ], "trayectoria" : [ "Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 10 }, "draft" : { "universidad" : "Texas", "año" : 2007, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "universidad" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
*/

/*
4.4 Queremos obtener ahora los jugadores que han estado a lo largo de su carrera exactamente en 3 equipos distintos.
*/

db.nba.find( { trayectoria: { $size: 3 } } )

/*
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" 
: { "universidad" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : "EEUU" }
{ "_id" : 17, "nombre" : "Jrue Holiday", "posicion" : [ "BA", "ES" ], "equipo" : "Milwaukee Bucks", "dorsal" : 21, "fechapotw" : [ ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers", "New Orleans Pelicans", "Milwaukee Bucks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 4 }, "draft" : { "universidad" : "UCLA", "año" : 2009, "eleccion" : 17 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 18, "nombre" : "Paul George", "posicion" : [ "ES", "AL" ], "equipo" : "Los Angeles Clippers", "dorsal" : 13, "fechapotw" : [ ISODate("2021-04-12T00:00:00Z") ], 
"trayectoria" : [ "Indiana Pacers", "Oklahoma City Thunder", "Los Angeles Clippers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Fresno State", "año" : 2010, "eleccion" : 10 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 19, "nombre" : "Julius Randle", "posicion" : [ "AP" ], "equipo" : "New York Knicks", "dorsal" : 30, "fechapotw" : [ ISODate("2021-04-19T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans", "New York Knicks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 9 }, "draft" : { "universidad" : "Kentucky", "año" : 2014, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 22, "nombre" : "Rusell Westbrook", "posicion" : [ "BA", "ES" ], "equipo" : "Washington Wizards", "dorsal" : 0, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Washington Wizards" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "UCLA", "año" : 2008, "eleccion" : 4 }, "nacionalidad" : [ "EEUU" ] }
*/


/*
5. El All-Star del la temporada 2020/2021 fue el día 8 de Marzo de 2021. Queremos obtener todos los jugadores que ya habían 
conseguido un premio de jugador de la semana antes de esa fecha.
*/

db.nba.find({
    "fechapotw" : {$lte: new Date("2021-03-08")}
})

/*
{ "_id" : 1, "nombre" : "Brandon Ingram", "posicion" : [ "AL" ], "equipo" : "New Orleans Pelicans", "dorsal" : 14, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "previo" : "Duke", "año" : 2016, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 2, "nombre" : "Domantas Sabonis", "posicion" : [ "AP" ], "equipo" : "Indiana Pacers", "dorsal" : 11, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Indiana Pacers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, "draft" : { "previo" : "Gonzaga", "año" : 2016, "eleccion" : 11 }, "nacionalidad" : [ "EEUU", "Lituania" ] }
{ "_id" : 3, "nombre" : "Stephen Curry", "posicion" : [ "BA", "ES" ], "equipo" : "Golden State Warriors", "dorsal" : 30, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z"), ISODate("2021-01-19T00:00:00Z") ], "trayectoria" : [ "Golden State Warriors" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "Davidson", "año" : 2009, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 4, "nombre" : "Tobias Harris", "posicion" : [ "AL", "AP" ], "equipo" : "Philadelphia Sixers", "dorsal" : 33, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks", "Orlando Magic", "Detroit Pistons", "Los Angeles Clippers", "Philadelphia Sixers" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "previo" : "Tennessee", "año" : 2011, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 5, "nombre" : "Luka Doncic", "posicion" : [ "AL" ], "equipo" : "Dallas Mavericks", "dorsal" : 77, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Dallas Mavericks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "previo" : "Real Madrid", "año" : 2018, "eleccion" : 3 }, "nacionalidad" : [ "Eslovenia" ] }
{ "_id" : 6, "nombre" : "Jayson Tatum", "posicion" : [ "AL" ], "equipo" : "Boston Celtics", "dorsal" : 0, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-12T00:00:00Z"), ISODate("2021-05-03T00:00:00Z") ], "trayectoria" : [ "Boston Celtics" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "previo" : "Duke", "año" : 2017, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 7, "nombre" : "Damian Lillard", "posicion" : [ "BA", "ES" ], "equipo" : "Portland Trail Blazers", "dorsal" : 0, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z"), 
ISODate("2021-02-22T00:00:00Z"), ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Portland Trail Blazers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 2 }, "draft" : { "previo" : "Weber State", "año" : 2012, "eleccion" : 6 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 8, "nombre" : "Kevin Durant", "posicion" : [ "AL" ], "equipo" : "Brooklyn Nets", "dorsal" : 7, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z") ], "trayectoria" : [ "Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 10 }, "draft" : { "previo" : "Texas", "año" : 2007, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 9, "nombre" : "Nikola Jokic", "posicion" : [ "P" ], "equipo" : "Denver Nuggets", "dorsal" : 15, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("1970-01-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z"), ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Denver Nuggets" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "previo" : "KK Mega Bemax", "año" : 2014, "eleccion" : 41 }, "nacionalidad" : [ "Serbia" ] }
{ "_id" : 10, "nombre" : "Joel Embiid", "posicion" : [ "P" ], "equipo" : "Philadelphia Sixers", "dorsal" : 21, "fechapotw" : [ ISODate("2021-01-25T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "previo" : "Kansas", "año" : 2014, "eleccion" : 3 }, "nacionalidad" : [ "Camerun" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "previo" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : "EEUU" }
{ "_id" : 12, "nombre" : "De'Aaron Fox", "posicion" : [ "BA" ], "equipo" : "Sacramento Kings", "dorsal" : 5, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Sacramento Kings" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "Kentucky", "año" : 2017, "eleccion" : 5 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 13, "nombre" : "Giannis Antetokounmpo", "posicion" : [ "AL", "AP" ], "equipo" : "Milwaukee Bucks", "dorsal" : 34, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, 
"draft" : { "previo" : "Filathlitikos", "año" : 2013, "eleccion" : 15 }, "nacionalidad" : [ "Grecia", "Nigeria" ] }
{ "_id" : 14, "nombre" : "Devin Booker", "posicion" : [ "ES" ], "equipo" : "Phoenix Suns", "dorsal" : 1, "fechapotw" : [ ISODate("2021-02-15T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-05-03T00:00:00Z") ], "trayectoria" : [ "Phoenix Suns" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 6 }, "draft" : { "previo" : 
"Kentucky", "año" : 2015, "eleccion" : 13 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 15, "nombre" : "Saddiq Bey", "posicion" : [ "AL", "AP" ], "equipo" : "Detroit Pistons", "dorsal" : 41, "fechapotw" : [ ISODate("2021-02-15T00:00:00Z") ], "trayectoria" : [ "Detroit Pistons" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "previo" : "Villanova", "año" : 2020, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
*/

/*
5.2 Vamos a modificar la búsqueda anterior para enfocarnos en aquellos jugadores que a pesar de tener un galardón como jugador de la semana
ya antes de esa fecha, no participaron en el All-Star 
*/

db.nba.find({
    $and:[{"fechapotw" : {$lt: new Date("2021-03-08")}},
    {"allstar" : false}
    ]})

/*
{ "_id" : 1, "nombre" : "Brandon Ingram", "posicion" : [ "AL" ], "equipo" : "New Orleans Pelicans", "dorsal" : 14, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "previo" : "Duke", "año" : 2016, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 4, "nombre" : "Tobias Harris", "posicion" : [ "AL", "AP" ], "equipo" : "Philadelphia Sixers", "dorsal" : 33, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks", "Orlando Magic", "Detroit Pistons", "Los Angeles Clippers", "Philadelphia Sixers" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "previo" : "Tennessee", "año" : 2011, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 8, "nombre" : "Kevin Durant", "posicion" : [ "AL" ], "equipo" : "Brooklyn Nets", "dorsal" : 7, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z") ], "trayectoria" : [ "Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 10 }, "draft" : { "previo" : "Texas", "año" : 2007, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 12, "nombre" : "De'Aaron Fox", "posicion" : [ "BA" ], "equipo" : "Sacramento Kings", "dorsal" : 5, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Sacramento Kings" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "previo" : "Kentucky", "año" : 2017, "eleccion" : 5 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 15, "nombre" : "Saddiq Bey", "posicion" : [ "AL", "AP" ], "equipo" : "Detroit Pistons", "dorsal" : 41, "fechapotw" : [ ISODate("2021-02-15T00:00:00Z") ], "trayectoria" : [ "Detroit Pistons" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "previo" : "Villanova", "año" : 2020, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }

Nota: Nótese que en el caso anterior se usó el operador $lte ("lower than or equal", es decir, menor o igual), 
en este se ha usado $lt ("lower than", es decir, menor). Esto se ha hecho aprovechando que durante el All-Star se
detienen los partidos (y por tanto, los Player Of The Week) durante una semana, y por tanto sabemos que este cambio
no afecta a los resultados, permitiendo así mostrar ambos operadores.
*/

/*
5.3 Como añadido al ejercicio anterior, vamos a buscar los jugadores que incumplen ambas condiciones, es decir, los que sí participaron en
el All-Star a pesar de que no consiguieron el premio de Player of the Week hasta después de este.
*/
db.nba.find({
    $nor:[{"fechapotw" : {$lt: new Date("2021-03-08")}},
    {"allstar" : false}
    ]})
/*
{ "_id" : 16, "nombre" : "Terry Rozier", "posicion" : [ "BA", "ES" ], "equipo" : "Charlotte Hornets", "dorsal" : 3, "fechapotw" : [ ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Boston Celtics", "Charlotte Hornets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Louisville", "año" : 2015, "eleccion" : 16 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 18, "nombre" : "Paul George", "posicion" : [ "ES", "AL" ], "equipo" : "Los Angeles Clippers", "dorsal" : 13, "fechapotw" : [ ISODate("2021-04-12T00:00:00Z") ], "trayectoria" : [ "Indiana Pacers", "Oklahoma City Thunder", "Los Angeles Clippers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Fresno State", "año" : 2010, "eleccion" : 10 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 19, "nombre" : "Julius Randle", "posicion" : [ "AP" ], "equipo" : "New York Knicks", "dorsal" : 30, "fechapotw" : [ ISODate("2021-04-19T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans", "New York Knicks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 9 }, "draft" : { "universidad" : "Kentucky", "año" : 2014, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 20, "nombre" : "Bradley Beal", "posicion" : [ "ES" ], "equipo" : "Washington Wizards", "dorsal" : 3, "fechapotw" : [ ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Washington Wizards" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "Florida", "año" : 2012, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
*/


/* 
7. Queremos saber aquellos jugadores galardonados que son más altos que un jugador en específico, por ejemplo
Ricky Rubio, que mide 191 cm (o lo que es lo mismo, 6 pies y 3 pulgadas).
*/
db.nba.find({
    $or:[{"altura.pies": {$gte: 7}},
    { $and: [ { "altura.pulgadas": {$gt: 3}}, { "altura.pies" : { $eq : 6 } } ] }
]})
/*
{ "_id" : 1, "nombre" : "Brandon Ingram", "posicion" : [ "AL" ], "equipo" : "New Orleans Pelicans", "dorsal" : 14, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "universidad" : "Duke", "año" : 2016, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 2, "nombre" : "Domantas Sabonis", "posicion" : [ "AP" ], "equipo" : "Indiana Pacers", "dorsal" : 11, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Indiana Pacers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, "draft" : { "universidad" : "Gonzaga", "año" : 2016, "eleccion" : 11 }, "nacionalidad" : [ "EEUU", "Lituania" ] }
{ "_id" : 4, "nombre" : "Tobias Harris", "posicion" : [ "AL", "AP" ], "equipo" : "Philadelphia Sixers", "dorsal" : 33, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks", "Orlando Magic", "Detroit Pistons", "Los Angeles Clippers", "Philadelphia Sixers" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "universidad" : "Tennessee", "año" : 2011, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 5, "nombre" : "Luka Doncic", "posicion" : [ "AL" ], "equipo" : "Dallas Mavericks", "dorsal" : 77, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Dallas Mavericks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "año" : 2018, "eleccion" : 3 }, "nacionalidad" : [ "Eslovenia" ] }
{ "_id" : 6, "nombre" : "Jayson Tatum", "posicion" : [ "AL" ], "equipo" : "Boston Celtics", "dorsal" : 0, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-12T00:00:00Z"), ISODate("2021-05-03T00:00:00Z") ], "trayectoria" : [ "Boston Celtics" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Duke", "año" : 2017, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 8, "nombre" : "Kevin Durant", "posicion" : [ "AL" ], "equipo" : "Brooklyn Nets", "dorsal" : 7, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z") ], "trayectoria" : [ "Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 10 }, "draft" : { "universidad" : "Texas", "año" : 2007, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 9, "nombre" : "Nikola Jokic", "posicion" : [ "P" ], "equipo" : "Denver Nuggets", "dorsal" : 15, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-01-25T00:00:00Z"), ISODate("2021-03-22T00:00:00Z"), ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Denver Nuggets" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "año" : 2014, "eleccion" : 41 }, "nacionalidad" : [ "Serbia" ] }
{ "_id" : 10, "nombre" : "Joel Embiid", "posicion" : [ "P" ], "equipo" : "Philadelphia Sixers", "dorsal" : 21, "fechapotw" : [ ISODate("2021-01-25T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "universidad" : "Kansas", "año" : 2014, "eleccion" : 3 }, "nacionalidad" : [ "Camerun" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "universidad" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : "EEUU" }
{ "_id" : 13, "nombre" : "Giannis Antetokounmpo", "posicion" : [ "AL", "AP" ], "equipo" : "Milwaukee Bucks", "dorsal" : 34, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, 
"draft" : { "año" : 2013, "eleccion" : 15 }, "nacionalidad" : [ "Grecia", "Nigeria" ] }
{ "_id" : 14, "nombre" : "Devin Booker", "posicion" : [ "ES" ], "equipo" : "Phoenix Suns", "dorsal" : 1, "fechapotw" : [ ISODate("2021-02-15T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-05-03T00:00:00Z") ], "trayectoria" : [ "Phoenix Suns" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 6 }, "draft" : { "universidad" : "Kentucky", "año" : 2015, "eleccion" : 13 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 15, "nombre" : "Saddiq Bey", "posicion" : [ "AL", "AP" ], "equipo" : "Detroit Pistons", "dorsal" : 41, "fechapotw" : [ ISODate("2021-02-15T00:00:00Z") ], "trayectoria" : [ "Detroit Pistons" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Villanova", "año" : 2020, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 17, "nombre" : "Jrue Holiday", "posicion" : [ "BA", "ES" ], "equipo" : "Milwaukee Bucks", "dorsal" : 21, "fechapotw" : [ ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers", "New Orleans Pelicans", "Milwaukee Bucks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 4 }, "draft" : { "universidad" : 
"UCLA", "año" : 2009, "eleccion" : 17 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 18, "nombre" : "Paul George", "posicion" : [ "ES", "AL" ], "equipo" : "Los Angeles Clippers", "dorsal" : 13, "fechapotw" : [ ISODate("2021-04-12T00:00:00Z") ], "trayectoria" : [ "Indiana Pacers", "Oklahoma City Thunder", "Los Angeles Clippers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Fresno State", "año" : 2010, "eleccion" : 10 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 19, "nombre" : "Julius Randle", "posicion" : [ "AP" ], "equipo" : "New York Knicks", "dorsal" : 30, "fechapotw" : [ ISODate("2021-04-19T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans", "New York Knicks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 9 }, "draft" : { "universidad" : "Kentucky", "año" : 2014, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 21, "nombre" : "Bojan Bogdanovic", "posicion" : [ "AL", "AP" ], "equipo" : "Utah Jazz", "dorsal" : 44, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Brooklyn Nets", "Washington Wizards", "Indiana Pacers", "Utah Jazz" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "año" : 2011, 
"eleccion" : 31 }, "nacionalidad" : [ "Bosnia-Herzegovina", "Croacia" ] }
*/

/*
8. En la NBA, existen dos conferencias, cada una con 15 equipos. Queremos obtener todos los Players Of The Week de una sola conferencia.
*/

var equiposeste = ["Washington Wizards", "Chicago Bulls", "Brooklyn Nets", "Philadelphia Sixers", "Cleveland Cavaliers", "Miami Heat", "New York Knicks", "Toronto Raptors", "Milwaukee Bucks", "Charlotte Hornets", "Boston Celtics", "Indiana Pacers", "Atlanta Hawks", "Orlando Magic", "Detroit Pistons"]

db.nba.find(
    { equipo: { $in: equiposeste } 
        })

/*
{ "_id" : 2, "nombre" : "Domantas Sabonis", "posicion" : [ "AP" ], "equipo" : "Indiana Pacers", "dorsal" : 11, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Indiana Pacers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, "draft" : { "universidad" : "Gonzaga", "año" : 2016, "eleccion" : 11 }, "nacionalidad" : [ "EEUU", "Lituania" ] }
{ "_id" : 4, "nombre" : "Tobias Harris", "posicion" : [ "AL", "AP" ], "equipo" : "Philadelphia Sixers", "dorsal" : 33, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks", "Orlando Magic", "Detroit Pistons", "Los Angeles Clippers", "Philadelphia Sixers" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "universidad" : "Tennessee", "año" : 2011, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 6, "nombre" : "Jayson Tatum", "posicion" : [ "AL" ], "equipo" : "Boston Celtics", "dorsal" : 0, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-12T00:00:00Z"), ISODate("2021-05-03T00:00:00Z") ], "trayectoria" : [ "Boston Celtics" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Duke", "año" : 2017, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 8, "nombre" : "Kevin Durant", "posicion" : [ "AL" ], "equipo" : "Brooklyn Nets", "dorsal" : 7, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z") ], "trayectoria" : [ "Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 10 }, "draft" : { "universidad" : "Texas", "año" : 2007, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 10, "nombre" : "Joel Embiid", "posicion" : [ "P" ], "equipo" : "Philadelphia Sixers", "dorsal" : 21, "fechapotw" : [ ISODate("2021-01-25T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "universidad" : "Kansas", "año" : 2014, "eleccion" : 3 }, "nacionalidad" : [ "Camerun" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "universidad" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : "EEUU" }
{ "_id" : 13, "nombre" : "Giannis Antetokounmpo", "posicion" : [ "AL", "AP" ], "equipo" : "Milwaukee Bucks", "dorsal" : 34, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, 
"draft" : { "año" : 2013, "eleccion" : 15 }, "nacionalidad" : [ "Grecia", "Nigeria" ] }
{ "_id" : 15, "nombre" : "Saddiq Bey", "posicion" : [ "AL", "AP" ], "equipo" : "Detroit Pistons", "dorsal" : 41, "fechapotw" : [ ISODate("2021-02-15T00:00:00Z") ], "trayectoria" : [ "Detroit Pistons" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Villanova", "año" : 2020, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 16, "nombre" : "Terry Rozier", "posicion" : [ "BA", "ES" ], "equipo" : "Charlotte Hornets", "dorsal" : 3, "fechapotw" : [ ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Boston Celtics", "Charlotte Hornets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Louisville", "año" : 2015, "eleccion" : 16 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 17, "nombre" : "Jrue Holiday", "posicion" : [ "BA", "ES" ], "equipo" : "Milwaukee Bucks", "dorsal" : 21, "fechapotw" : [ ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers", "New Orleans Pelicans", "Milwaukee Bucks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 4 }, "draft" : { "universidad" : 
"UCLA", "año" : 2009, "eleccion" : 17 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 19, "nombre" : "Julius Randle", "posicion" : [ "AP" ], "equipo" : "New York Knicks", "dorsal" : 30, "fechapotw" : [ ISODate("2021-04-19T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans", "New York Knicks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 9 }, "draft" : { "universidad" : "Kentucky", "año" : 2014, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 20, "nombre" : "Bradley Beal", "posicion" : [ "ES" ], "equipo" : "Washington Wizards", "dorsal" : 3, "fechapotw" : [ ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Washington Wizards" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "Florida", "año" : 2012, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 22, "nombre" : "Rusell Westbrook", "posicion" : [ "BA", "ES" ], "equipo" : "Washington Wizards", "dorsal" : 0, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Washington Wizards" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "UCLA", "año" : 2008, "eleccion" : 4 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 23, "nombre" : "Trae Young", "posicion" : [ "BA" ], "equipo" : "Atlanta Hawks", "dorsal" : 11, "fechapotw" : [ ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Atlanta Hawks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Oklahoma", "año" : 2018, "eleccion" : 5 }, "nacionalidad" 
: [ "EEUU" ] }
*/

/*
8.2 Utilizando ahora otra variable, en este caso un array de todos los equipos de la Conferencia Oeste, pretendemos volver a obtener
todos aquellos jugadores que ganaron el POTW de la Conferencia ESTE.  
*/

var equiposoeste = ["Golden State Warriors", "Phoenix Suns", "Utah Jazz", "Dallas Mavericks", "Denver Nuggets", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Sacramento Kings", "Portland Trail Blazers", "Oklahoma City Thunder", "San Antonio Spurs", "Houston Rockets", "Minnesota Timberwolves", "New Orleans Pelicans"]

db.nba.find(
    { equipo: { $nin: equiposoeste } 
        })

/*
{ "_id" : 2, "nombre" : "Domantas Sabonis", "posicion" : [ "AP" ], "equipo" : "Indiana Pacers", "dorsal" : 11, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Indiana Pacers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, "draft" : { "universidad" : "Gonzaga", "año" : 2016, "eleccion" : 11 }, "nacionalidad" : [ "EEUU", "Lituania" ] }
{ "_id" : 4, "nombre" : "Tobias Harris", "posicion" : [ "AL", "AP" ], "equipo" : "Philadelphia Sixers", "dorsal" : 33, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks", "Orlando Magic", "Detroit Pistons", "Los Angeles Clippers", "Philadelphia Sixers" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "universidad" : "Tennessee", "año" : 2011, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 6, "nombre" : "Jayson Tatum", "posicion" : [ "AL" ], "equipo" : "Boston Celtics", "dorsal" : 0, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-12T00:00:00Z"), ISODate("2021-05-03T00:00:00Z") ], "trayectoria" : [ "Boston Celtics" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Duke", "año" : 2017, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 8, "nombre" : "Kevin Durant", "posicion" : [ "AL" ], "equipo" : "Brooklyn Nets", "dorsal" : 7, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z") ], "trayectoria" : [ "Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 10 }, "draft" : { "universidad" : "Texas", "año" : 2007, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 10, "nombre" : "Joel Embiid", "posicion" : [ "P" ], "equipo" : "Philadelphia Sixers", "dorsal" : 21, "fechapotw" : [ ISODate("2021-01-25T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "universidad" : "Kansas", "año" : 2014, "eleccion" : 3 }, "nacionalidad" : [ "Camerun" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "universidad" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : "EEUU" }
{ "_id" : 13, "nombre" : "Giannis Antetokounmpo", "posicion" : [ "AL", "AP" ], "equipo" : "Milwaukee Bucks", "dorsal" : 34, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, 
"draft" : { "año" : 2013, "eleccion" : 15 }, "nacionalidad" : [ "Grecia", "Nigeria" ] }
{ "_id" : 15, "nombre" : "Saddiq Bey", "posicion" : [ "AL", "AP" ], "equipo" : "Detroit Pistons", "dorsal" : 41, "fechapotw" : [ ISODate("2021-02-15T00:00:00Z") ], "trayectoria" : [ "Detroit Pistons" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Villanova", "año" : 2020, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 16, "nombre" : "Terry Rozier", "posicion" : [ "BA", "ES" ], "equipo" : "Charlotte Hornets", "dorsal" : 3, "fechapotw" : [ ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Boston Celtics", "Charlotte Hornets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Louisville", "año" : 2015, "eleccion" : 16 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 17, "nombre" : "Jrue Holiday", "posicion" : [ "BA", "ES" ], "equipo" : "Milwaukee Bucks", "dorsal" : 21, "fechapotw" : [ ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers", "New Orleans Pelicans", "Milwaukee Bucks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 4 }, "draft" : { "universidad" : 
"UCLA", "año" : 2009, "eleccion" : 17 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 19, "nombre" : "Julius Randle", "posicion" : [ "AP" ], "equipo" : "New York Knicks", "dorsal" : 30, "fechapotw" : [ ISODate("2021-04-19T00:00:00Z") ], "trayectoria" : [ "Los Angeles Lakers", "New Orleans Pelicans", "New York Knicks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 9 }, "draft" : { "universidad" : "Kentucky", "año" : 2014, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 20, "nombre" : "Bradley Beal", "posicion" : [ "ES" ], "equipo" : "Washington Wizards", "dorsal" : 3, "fechapotw" : [ ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Washington Wizards" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "Florida", "año" : 2012, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 22, "nombre" : "Rusell Westbrook", "posicion" : [ "BA", "ES" ], "equipo" : "Washington Wizards", "dorsal" : 0, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Washington Wizards" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "UCLA", "año" : 2008, "eleccion" : 4 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 23, "nombre" : "Trae Young", "posicion" : [ "BA" ], "equipo" : "Atlanta Hawks", "dorsal" : 11, "fechapotw" : [ ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Atlanta Hawks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Oklahoma", "año" : 2018, "eleccion" : 5 }, "nacionalidad" 
: [ "EEUU" ] }
*/

/*
9. La mayoría de jugadores llegan a la NBA después de jugar en la liga universitaria. Sin embargo, aquellos que vienen de Europa no pasan
por la universidad americana. Buscamos a estos jugadores.
*/

db.nba.find( { "draft.universidad": { $exists: false} } )

/*
{ "_id" : 5, "nombre" : "Luka Doncic", "posicion" : [ "AL" ], "equipo" : "Dallas Mavericks", "dorsal" : 77, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Dallas Mavericks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "año" : 2018, "eleccion" : 3 }, "nacionalidad" : [ "Eslovenia" ] }
{ "_id" : 9, "nombre" : "Nikola Jokic", "posicion" : [ "P" ], "equipo" : "Denver Nuggets", "dorsal" : 15, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-01-25T00:00:00Z"), ISODate("2021-03-22T00:00:00Z"), ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Denver Nuggets" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "año" : 2014, "eleccion" : 41 }, "nacionalidad" : [ "Serbia" ] }
{ "_id" : 13, "nombre" : "Giannis Antetokounmpo", "posicion" : [ "AL", "AP" ], "equipo" : "Milwaukee Bucks", "dorsal" : 34, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, 
"draft" : { "año" : 2013, "eleccion" : 15 }, "nacionalidad" : [ "Grecia", "Nigeria" ] }
{ "_id" : 21, "nombre" : "Bojan Bogdanovic", "posicion" : [ "AL", "AP" ], "equipo" : "Utah Jazz", "dorsal" : 44, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Brooklyn Nets", "Washington Wizards", "Indiana Pacers", "Utah Jazz" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "año" : 2011, 
"eleccion" : 31 }, "nacionalidad" : [ "Bosnia-Herzegovina", "Croacia" ] }
*/

/*
10. Queremos obtener aquellos jugadores que tienen cualquier nacionalidad distinta a la estadounidense.
Esto incluye a aquellos que tienen alguna nacionalidad aparte de la estadounidense.
*/

db.nba.find( {nacionalidad: {$ne: ["EEUU"]} })

/*
{ "_id" : 2, "nombre" : "Domantas Sabonis", "posicion" : [ "AP" ], "equipo" : "Indiana Pacers", "dorsal" : 11, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Indiana Pacers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, "draft" : { "universidad" : "Gonzaga", "año" : 2016, "eleccion" : 11 }, "nacionalidad" : [ "EEUU", "Lituania" ] }
{ "_id" : 5, "nombre" : "Luka Doncic", "posicion" : [ "AL" ], "equipo" : "Dallas Mavericks", "dorsal" : 77, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Dallas Mavericks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "año" : 2018, "eleccion" : 3 }, "nacionalidad" : [ "Eslovenia" ] }
{ "_id" : 9, "nombre" : "Nikola Jokic", "posicion" : [ "P" ], "equipo" : "Denver Nuggets", "dorsal" : 15, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-01-25T00:00:00Z"), ISODate("2021-03-22T00:00:00Z"), ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Denver Nuggets" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "año" : 2014, "eleccion" : 41 }, "nacionalidad" : [ "Serbia" ] }
{ "_id" : 10, "nombre" : "Joel Embiid", "posicion" : [ "P" ], "equipo" : "Philadelphia Sixers", "dorsal" : 21, "fechapotw" : [ ISODate("2021-01-25T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "universidad" : "Kansas", "año" : 2014, "eleccion" : 3 }, "nacionalidad" : [ "Camerun" ] }
{ "_id" : 13, "nombre" : "Giannis Antetokounmpo", "posicion" : [ "AL", "AP" ], "equipo" : "Milwaukee Bucks", "dorsal" : 34, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, 
"draft" : { "año" : 2013, "eleccion" : 15 }, "nacionalidad" : [ "Grecia", "Nigeria" ] }
{ "_id" : 21, "nombre" : "Bojan Bogdanovic", "posicion" : [ "AL", "AP" ], "equipo" : "Utah Jazz", "dorsal" : 44, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Brooklyn Nets", "Washington Wizards", "Indiana Pacers", "Utah Jazz" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "año" : 2011, 
"eleccion" : 31 }, "nacionalidad" : [ "Bosnia-Herzegovina", "Croacia" ] }
*/

/*
11. Queremos saber qué jugadores no han salido de los 10 equipos con más títulos en la liga universitaria.

Nota: Evidentemente, en estos jugadores se incluyen aquellos que directamente no participaron en la liga universitaria,
ya que no han salido de ningun equipo de la liga universitaria, en específico de los 10 con más títulos.
*/

var topuniversidades = ["UCLA", "Kentucky", "North Carolina", "Duke", "Indiana", "Connecticut", "Kansas", "Villanova", "Florida", "Louisville"]

db.nba.find(
    { "draft.universidad": { $nin: topuniversidades } 
        })

/*
{ "_id" : 2, "nombre" : "Domantas Sabonis", "posicion" : [ "AP" ], "equipo" : "Indiana Pacers", "dorsal" : 11, "fechapotw" : [ ISODate("2020-12-28T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Indiana Pacers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, "draft" : { "universidad" : "Gonzaga", "año" : 2016, "eleccion" : 11 }, "nacionalidad" : [ "EEUU", "Lituania" ] }
{ "_id" : 3, "nombre" : "Stephen Curry", "posicion" : [ "BA", "ES" ], "equipo" : "Golden State Warriors", "dorsal" : 30, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z"), ISODate("2021-01-19T00:00:00Z") ], "trayectoria" : [ "Golden State Warriors" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "Davidson", "año" : 2009, "eleccion" : 7 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 4, "nombre" : "Tobias Harris", "posicion" : [ "AL", "AP" ], "equipo" : "Philadelphia Sixers", "dorsal" : 33, "fechapotw" : [ ISODate("2021-01-04T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks", "Orlando Magic", "Detroit Pistons", "Los Angeles Clippers", "Philadelphia Sixers" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "universidad" : "Tennessee", "año" : 2011, "eleccion" : 19 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 5, "nombre" : "Luka Doncic", "posicion" : [ "AL" ], "equipo" : "Dallas Mavericks", "dorsal" : 77, "fechapotw" : [ ISODate("2021-01-11T00:00:00Z"), ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Dallas Mavericks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 7 }, "draft" : { "año" : 2018, "eleccion" : 3 }, "nacionalidad" : [ "Eslovenia" ] }
{ "_id" : 7, "nombre" : "Damian Lillard", "posicion" : [ "BA", "ES" ], "equipo" : "Portland Trail Blazers", "dorsal" : 0, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z"), 
ISODate("2021-02-22T00:00:00Z"), ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Portland Trail Blazers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 2 }, "draft" : { "universidad" : "Weber State", "año" : 2012, "eleccion" : 6 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 8, "nombre" : "Kevin Durant", "posicion" : [ "AL" ], "equipo" : "Brooklyn Nets", "dorsal" : 7, "fechapotw" : [ ISODate("2021-01-18T00:00:00Z") ], "trayectoria" : [ "Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 10 }, "draft" : { "universidad" : "Texas", "año" : 2007, "eleccion" : 2 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 9, "nombre" : "Nikola Jokic", "posicion" : [ "P" ], "equipo" : "Denver Nuggets", "dorsal" : 15, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-01-25T00:00:00Z"), ISODate("2021-03-22T00:00:00Z"), ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Denver Nuggets" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "año" : 2014, "eleccion" : 41 }, "nacionalidad" : [ "Serbia" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "universidad" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 13, "nombre" : "Giannis Antetokounmpo", "posicion" : [ "AL", "AP" ], "equipo" : "Milwaukee Bucks", "dorsal" : 34, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, 
"draft" : { "año" : 2013, "eleccion" : 15 }, "nacionalidad" : [ "Grecia", "Nigeria" ] }
{ "_id" : 18, "nombre" : "Paul George", "posicion" : [ "ES", "AL" ], "equipo" : "Los Angeles Clippers", "dorsal" : 13, "fechapotw" : [ ISODate("2021-04-12T00:00:00Z") ], "trayectoria" : [ "Indiana Pacers", "Oklahoma City Thunder", "Los Angeles Clippers" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "universidad" : "Fresno State", "año" : 2010, "eleccion" : 10 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 21, "nombre" : "Bojan Bogdanovic", "posicion" : [ "AL", "AP" ], "equipo" : "Utah Jazz", "dorsal" : 44, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Brooklyn Nets", "Washington Wizards", "Indiana Pacers", "Utah Jazz" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 8 }, "draft" : { "año" : 2011, 
"eleccion" : 31 }, "nacionalidad" : [ "Bosnia-Herzegovina", "Croacia" ] }
{ "_id" : 23, "nombre" : "Trae Young", "posicion" : [ "BA" ], "equipo" : "Atlanta Hawks", "dorsal" : 11, "fechapotw" : [ ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Atlanta Hawks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Oklahoma", "año" : 2018, "eleccion" : 5 }, "nacionalidad" 
: [ "EEUU" ] }
*/

/*
12. Buscamos todos aquellos jugadores que no son ni aleros ni ala pivots y juegan en la conferencia este.
*/

db.nba.find({
    $and:[{ posicion:{ $not: { $regex: /A./, $options: "si" } }},
    { equipo: { $in: equiposeste } }
    ]})

/*
{ "_id" : 10, "nombre" : "Joel Embiid", "posicion" : [ "P" ], "equipo" : "Philadelphia Sixers", "dorsal" : 21, "fechapotw" : [ ISODate("2021-01-25T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "universidad" : "Kansas", "año" : 2014, "eleccion" : 3 }, "nacionalidad" : [ "Camerun" ] }
{ "_id" : 11, "nombre" : "James Harden", "posicion" : [ "ES" ], "equipo" : "Brooklyn Nets", "dorsal" : 13, "fechapotw" : [ ISODate("2021-02-01T00:00:00Z"), ISODate("2021-02-22T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 5 }, "draft" : { "universidad" : "Arizona State", "año" : 2009, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 16, "nombre" : "Terry Rozier", "posicion" : [ "BA", "ES" ], "equipo" : "Charlotte Hornets", "dorsal" : 3, "fechapotw" : [ ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Boston Celtics", "Charlotte Hornets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Louisville", "año" : 2015, "eleccion" : 16 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 17, "nombre" : "Jrue Holiday", "posicion" : [ "BA", "ES" ], "equipo" : "Milwaukee Bucks", "dorsal" : 21, "fechapotw" : [ ISODate("2021-04-05T00:00:00Z") ], "trayectoria" : [ "Philadelphia Sixers", "New Orleans Pelicans", "Milwaukee Bucks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 4 }, "draft" : { "universidad" : 
"UCLA", "año" : 2009, "eleccion" : 17 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 20, "nombre" : "Bradley Beal", "posicion" : [ "ES" ], "equipo" : "Washington Wizards", "dorsal" : 3, "fechapotw" : [ ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Washington Wizards" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "Florida", "año" : 2012, "eleccion" : 3 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 22, "nombre" : "Rusell Westbrook", "posicion" : [ "BA", "ES" ], "equipo" : "Washington Wizards", "dorsal" : 0, "fechapotw" : [ ISODate("2021-05-10T00:00:00Z") ], "trayectoria" : [ "Oklahoma City Thunder", "Houston Rockets", "Washington Wizards" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "UCLA", "año" : 2008, "eleccion" : 4 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 23, "nombre" : "Trae Young", "posicion" : [ "BA" ], "equipo" : "Atlanta Hawks", "dorsal" : 11, "fechapotw" : [ ISODate("2021-05-17T00:00:00Z") ], "trayectoria" : [ "Atlanta Hawks" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Oklahoma", "año" : 2018, "eleccion" : 5 }, "nacionalidad" 
: [ "EEUU" ] }
*/

/*
13. Queremos encontrar todos aquellos jugadores que ganaron un POTW durante el mes de marzo.
*/

db.nba.find(
    { "fechapotw": { $elemMatch: { $gte: new Date("2021-03-01"), $lt: new Date("2021-04-01") } } }
)

/*
{ "_id" : 9, "nombre" : "Nikola Jokic", "posicion" : [ "P" ], "equipo" : "Denver Nuggets", "dorsal" : 15, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-01-25T00:00:00Z"), ISODate("2021-03-22T00:00:00Z"), ISODate("2021-04-26T00:00:00Z") ], "trayectoria" : [ "Denver Nuggets" ], "allstar" : true, "altura" : { "pies" : 7, "pulgadas" : 0 }, "draft" : { "año" : 2014, "eleccion" : 41 }, "nacionalidad" : [ "Serbia" ] }
{ "_id" : 12, "nombre" : "De'Aaron Fox", "posicion" : [ "BA" ], "equipo" : "Sacramento Kings", "dorsal" : 5, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Sacramento Kings" ], "allstar" : false, "altura" : { "pies" : 6, "pulgadas" : 3 }, "draft" : { "universidad" : "Kentucky", "año" : 2017, "eleccion" : 5 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 13, "nombre" : "Giannis Antetokounmpo", "posicion" : [ "AL", "AP" ], "equipo" : "Milwaukee Bucks", "dorsal" : 34, "fechapotw" : [ ISODate("2021-02-08T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-03-22T00:00:00Z") ], "trayectoria" : [ "Milwaukee Bucks" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 11 }, 
"draft" : { "año" : 2013, "eleccion" : 15 }, "nacionalidad" : [ "Grecia", "Nigeria" ] }
{ "_id" : 14, "nombre" : "Devin Booker", "posicion" : [ "ES" ], "equipo" : "Phoenix Suns", "dorsal" : 1, "fechapotw" : [ ISODate("2021-02-15T00:00:00Z"), ISODate("2021-03-01T00:00:00Z"), ISODate("2021-05-03T00:00:00Z") ], "trayectoria" : [ "Phoenix Suns" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 6 }, "draft" : { "universidad" : "Kentucky", "año" : 2015, "eleccion" : 13 }, "nacionalidad" : [ "EEUU" ] }
{ "_id" : 16, "nombre" : "Terry Rozier", "posicion" : [ "BA", "ES" ], "equipo" : "Charlotte Hornets", "dorsal" : 3, "fechapotw" : [ ISODate("2021-03-29T00:00:00Z") ], "trayectoria" : [ "Boston Celtics", "Charlotte Hornets" ], "allstar" : true, "altura" : { "pies" : 6, "pulgadas" : 1 }, "draft" : { "universidad" : "Louisville", "año" : 2015, "eleccion" : 16 }, "nacionalidad" : [ "EEUU" ] }

NOTA: Es importante aclarar que se usa "$gte" al principio para que todos aquellos galardones del 01 de Marzo se incluyan,
incluidos si su hora son las 00:00 (que dado que no hemos especificado hora y hay galardones de ese día se cumple en un par de casos),
mientras que en el caso del final se usa "$lt" ya que es más fácil especificar el 1 de Abril a las 00:00 que el 31 de Marzo a las
23:59:59, pero evidentemente los casos que ocurriesen el 1 de Abril a las 00:00 (que en este caso no existen pero se podrían dar)
pertenecerían por tanto al mes de Abril.
*/
