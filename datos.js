db.nba.drop()

db.nba.insertMany([
    {"_id":1, nombre: "Brandon Ingram", posicion:["AL"], equipo: "New Orleans Pelicans", dorsal:14, fechapotw:[new Date ("2020-12-28")], trayectoria:["Los Angeles Lakers", "New Orleans Pelicans"], allstar:false, altura:{pies: 6, pulgadas: 7},draft: {universidad:"Duke", año:2016, eleccion:2}, nacionalidad: ["EEUU"]},
    {"_id":2, nombre: "Domantas Sabonis", posicion:["AP"], equipo: "Indiana Pacers", dorsal:11, fechapotw:[new Date ("2020-12-28")], trayectoria:["Oklahoma City Thunder", "Indiana Pacers"], allstar:true, altura:{pies: 6, pulgadas: 11},draft: {universidad:"Gonzaga", año:2016, eleccion:11}, nacionalidad:["EEUU", "Lituania"]},
    {"_id":3, nombre: "Stephen Curry", posicion:["BA","ES"], equipo: "Golden State Warriors", dorsal:30, fechapotw:[new Date ("2021-01-04"), new Date ("2021-01-19")], trayectoria:["Golden State Warriors"], allstar:true, altura: {pies: 6, pulgadas: 3},draft: {universidad:"Davidson", año:2009, eleccion:7}, nacionalidad:["EEUU"]},
    {"_id":4, nombre: "Tobias Harris", posicion:["AL","AP"], equipo: "Philadelphia Sixers", dorsal:33, fechapotw:[new Date ("2021-01-04")], trayectoria:["Milwaukee Bucks", "Orlando Magic", "Detroit Pistons", "Los Angeles Clippers", "Philadelphia Sixers"], allstar:false, altura: {pies: 6, pulgadas: 7},draft: {universidad:"Tennessee", año:2011, eleccion:19}, nacionalidad:["EEUU"]},
    {"_id":5, nombre: "Luka Doncic", posicion:["AL"], equipo: "Dallas Mavericks", dorsal:77, fechapotw:[new Date ("2021-01-11"), new Date ("2021-04-05")], trayectoria:["Dallas Mavericks"], allstar:true, altura: {pies: 6, pulgadas: 7},draft: {año:2018, eleccion:3}, nacionalidad:["Eslovenia"]},
    {"_id":6, nombre: "Jayson Tatum", posicion:["AL"], equipo: "Boston Celtics", dorsal:0, fechapotw:[new Date ("2021-01-11"), new Date ("2021-04-12"), new Date ("2021-05-03")], trayectoria:["Boston Celtics"], allstar:true, altura: {pies: 6, pulgadas: 8},draft: {universidad:"Duke", año:2017, eleccion:3},nacionalidad:["EEUU"]},
    {"_id":7, nombre: "Damian Lillard", posicion:["BA","ES"], equipo: "Portland Trail Blazers", dorsal:0, fechapotw:[new Date ("2021-01-18"), new Date ("2021-02-22"), new Date ("2021-05-17")], trayectoria:["Portland Trail Blazers"], allstar:true, altura: {pies: 6, pulgadas: 2},draft: {universidad:"Weber State", año:2012, eleccion:6}, nacionalidad:["EEUU"]},
    {"_id":8, nombre: "Kevin Durant", posicion:["AL"], equipo: "Brooklyn Nets", dorsal:7, fechapotw:[new Date ("2021-01-18")], trayectoria:["Seattle Supersonics", "Oklahoma City Thunder", "Golden State Warriors", "Brooklyn Nets"], allstar:false, altura: {pies: 6, pulgadas: 10},draft: {universidad:"Texas", año:2007, eleccion:2}, nacionalidad:["EEUU"]},
    {"_id":9, nombre: "Nikola Jokic", posicion:["P"], equipo: "Denver Nuggets", dorsal:15, fechapotw:[new Date ("2021-02-08"), new Date ("2021-01-25"), new Date ("2021-03-22"), new Date ("2021-04-26")], trayectoria:["Denver Nuggets"], allstar:true, altura: {pies: 7, pulgadas: 0},draft: {año:2014, eleccion:41}, nacionalidad:["Serbia"]},
    {"_id":10, nombre: "Joel Embiid", posicion:["P"], equipo: "Philadelphia Sixers", dorsal:21, fechapotw:[new Date ("2021-01-25")], trayectoria:["Philadelphia Sixers"], allstar:true, altura: {pies: 7, pulgadas: 0},draft: {universidad:"Kansas", año:2014, eleccion:3}, nacionalidad:["Camerun"]},
    {"_id":11, nombre: "James Harden", posicion:["ES"], equipo: "Brooklyn Nets", dorsal:13, fechapotw:[new Date ("2021-02-01"), new Date ("2021-02-22")], trayectoria:["Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets"], allstar:true, altura: {pies: 6, pulgadas: 5},draft: {universidad:"Arizona State", año:2009, eleccion:3}, nacionalidad:["EEUU"]},
    {"_id":12, nombre: "De'Aaron Fox", posicion:["BA"], equipo: "Sacramento Kings", dorsal:5, fechapotw:[new Date ("2021-02-08"), new Date ("2021-03-29")], trayectoria:["Sacramento Kings"], allstar:false, altura: {pies: 6, pulgadas: 3},draft: {universidad:"Kentucky", año:2017, eleccion:5}, nacionalidad:["EEUU"]},
    {"_id":13, nombre: "Giannis Antetokounmpo", posicion:["AL", "AP"], equipo: "Milwaukee Bucks", dorsal:34, fechapotw:[new Date ("2021-02-08"), new Date ("2021-03-01"), new Date ("2021-03-22")], trayectoria:["Milwaukee Bucks"], allstar:true, altura: {pies: 6, pulgadas: 11},draft: {año:2013, eleccion:15}, nacionalidad:["Grecia", "Nigeria"]},
    {"_id":14, nombre: "Devin Booker", posicion:["ES"], equipo: "Phoenix Suns", dorsal:1, fechapotw:[new Date ("2021-02-15"), new Date ("2021-03-01"), new Date ("2021-05-03")], trayectoria:["Phoenix Suns"], allstar:true, altura: {pies: 6, pulgadas: 6},draft: {universidad:"Kentucky", año:2015, eleccion:13}, nacionalidad:["EEUU"]},
    {"_id":15, nombre: "Saddiq Bey", posicion:["AL", "AP"], equipo: "Detroit Pistons", dorsal:41, fechapotw:[new Date ("2021-02-15")], trayectoria:["Detroit Pistons"], allstar:false, altura: {pies: 6, pulgadas: 8},draft: {universidad:"Villanova", año:2020, eleccion:19}, nacionalidad:["EEUU"]},
    {"_id":16, nombre: "Terry Rozier", posicion:["BA", "ES"], equipo: "Charlotte Hornets", dorsal:3, fechapotw:[new Date ("2021-03-29")], trayectoria:["Boston Celtics", "Charlotte Hornets"], allstar:true, altura: {pies: 6, pulgadas: 1},draft: {universidad:"Louisville", año:2015, eleccion:16}, nacionalidad:["EEUU"]},
    {"_id":17, nombre: "Jrue Holiday", posicion:["BA", "ES"], equipo: "Milwaukee Bucks", dorsal:21, fechapotw:[new Date ("2021-04-05")], trayectoria:["Philadelphia Sixers", "New Orleans Pelicans", "Milwaukee Bucks"], allstar:false, altura: {pies: 6, pulgadas: 4},draft: {universidad:"UCLA", año:2009, eleccion:17}, nacionalidad:["EEUU"]},
    {"_id":18, nombre: "Paul George", posicion:["ES", "AL"], equipo: "Los Angeles Clippers", dorsal:13, fechapotw:[new Date ("2021-04-12")], trayectoria:["Indiana Pacers", "Oklahoma City Thunder", "Los Angeles Clippers"], allstar:true, altura: {pies: 6, pulgadas: 8},draft: {universidad:"Fresno State", año:2010, eleccion:10}, nacionalidad:["EEUU"]},
    {"_id":19, nombre: "Julius Randle", posicion:["AP"], equipo: "New York Knicks", dorsal:30, fechapotw:[new Date ("2021-04-19")], trayectoria:["Los Angeles Lakers", "New Orleans Pelicans", "New York Knicks"], allstar:true, altura: {pies: 6, pulgadas: 9},draft: {universidad:"Kentucky", año:2014, eleccion:7}, nacionalidad:["EEUU"]},
    {"_id":20, nombre: "Bradley Beal", posicion:["ES"], equipo: "Washington Wizards", dorsal:3, fechapotw:[new Date ("2021-04-26")], trayectoria:["Washington Wizards"], allstar:true, altura: {pies: 6, pulgadas: 3},draft: {universidad:"Florida", año:2012, eleccion:3}, nacionalidad:["EEUU"]},
    {"_id":21, nombre: "Bojan Bogdanovic", posicion:["AL", "AP"], equipo: "Utah Jazz", dorsal:44, fechapotw:[new Date ("2021-05-10")], trayectoria:["Brooklyn Nets", "Washington Wizards", "Indiana Pacers", "Utah Jazz"], allstar:false, altura: {pies: 6, pulgadas: 8},draft: {año:2011, eleccion:31}, nacionalidad:["Bosnia-Herzegovina", "Croacia"]},
    {"_id":22, nombre: "Rusell Westbrook", posicion:["BA", "ES"], equipo: "Washington Wizards", dorsal:0, fechapotw:[new Date ("2021-05-10")], trayectoria:["Oklahoma City Thunder", "Houston Rockets", "Washington Wizards"], allstar:false, altura: {pies: 6, pulgadas: 3},draft: {universidad:"UCLA", año:2008, eleccion:4}, nacionalidad:["EEUU"]},
    {"_id":23, nombre: "Trae Young", posicion:["BA"], equipo: "Atlanta Hawks", dorsal:11, fechapotw:[new Date ("2021-05-17")], trayectoria:["Atlanta Hawks"], allstar:false, altura: {pies: 6, pulgadas: 1}, draft: {universidad:"Oklahoma", año:2018, eleccion:5}, nacionalidad:["EEUU"]}

])
/*
"_id":1 ,nombre -> cadena de caracteres
equipo2-> cadena de caracteres
dorsal -> número
posicion -> número/cadena de caracteres
fechapotw -> array [fechas]
trayectoria -> array [strings]
allstar -> ¿número? es posible que sean string[años]
*/

/*
Búsquedas:
- Todos los jugadores que comparten un equipo
- Jugadores que comparten una posición
- Jugadores cuyo nombre empieza por una letra
- Si consigo meter equipos por conferencia, todos los jugadores de una conferencia
- Jugadores con el mismo dorsal, si los hubiese
- Jugadores que fueron potw el mismo día
- Jugadores que fueron potw más de una vez en el mismo mes
- En el caso de un día con un jugador con múltiples potw y otro que solo tiene uno, mostrar que si se busca solo uno sale solo ese
- Todos los jugadores que fueron potw en un mes concreto 
- Todos los jugadores que han pasado por un equipo concreto
- Todos los jugadores que fueron drafteados por un equipo concreto (es decir, empezaron carrera allí)
- Si meto altura, todos los jugadores más bajos que uno concreto, por ejemplo Pau Gasol (introducir esto como o bien menores de 6 pies o bien de 6 pies y menores de 11 pulgadas p.ej.)
- Todos los jugadores que han jugado en un número concreto de equipos
*/



db.nba.insertOne({

    "_id":1, 
    nombre: "Brandon Ingram", 
    posicion:["AL"], 
    equipo: "New Orleans Pelicans", 
    dorsal:14, 
    fechapotw:[new Date ("2020-12-28")], 
    trayectoria:["Los Angeles Lakers", "New Orleans Pelicans"], 
    allstar:false, 
    altura:{pies: 6, pulgadas: 7},
    draft: {universidad:"Duke", año:2016, eleccion:2}, 
    nacionalidad: ["EEUU"]},)