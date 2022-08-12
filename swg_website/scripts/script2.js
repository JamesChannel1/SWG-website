
document.getElementById("button0").addEventListener("click", myFunction0);

function myFunction0() {
  var user_data00 = document.getElementById("user_input0").value;

  var tatooine_info0 = " Tatooine is a planet filled with rolling sand dunes and vast expanses of desert. Located in the desolate and dangerous void of the Outer Rim, it is a world predominantly overseen by the Hutts. It is the starter planet for all players and is the least dangerous in the game, excluding the areas containing Krayt Dragons. The planet is a large desert almost completely covered in sand. Landscape varies from mountains and valleys in the Jundland Wastes to rolling endless rolling sand in the East and West Dune Seas. Despite the hot, arrid conditions, the planet has multiple major cities, forms of entertainment and adventures."
  var naboo_info0 = " Naboo is a lush, green planet filled with magnificent cities and flowing rivers. It has three moons, which are during the night hours. It is usually the next step after Tatooine. Naboo is best known for its gorgeous capital of Theed, but it's home to many other cities. One may build homes and facilities on the planet. Creatures that roam the planet vary from veermoks to giant peko peko birds. Also, Naboo has five NPC cities. Many of them are near rivers (Keren), waterfalls (Dee'ja Peak and Theed), swamps (Moenia), or water in general (Kaadara)."
  var yavin4_info0 = " Yavin IV is the fourth moon of the orange gas giant Yavin. It is a jungle world, known for housing a major rebel base after the Dantooine base was abandoned. It is over this moon's parent planet that the famous Battle of Yavin took place. After the rebel base there was abandoned, however, it has become a quiet place. Most of the planet is engulfed in a huge, thick jungle that can be hard to traverse by vehicle. Only three starports exist on the planet at opposite ends. After the Rebels abandoned the planet, it has become quiet and alienated."
  var alderaan_info0 = " Alderaan, located in the Core Worlds, was a terrestrial planet covered with mountains. During the waning decades of the Galactic Republic, it was ruled by Queen Breha Organa."
  var corellia_info0 = "Corellia is one of the Core Worlds, planets of great importance that lie near the center of the known galaxy. As such, it acts as the largest, most populated planet in Galaxies, home to the largest cities and most hyperspace routes of any planet. Its strategic location in the galaxy brings innumerable wealth to Corellia, which helps the planetary CorSec police maintain independence from Imperial domination. However, Corellian cities are open to control by factional forces and do take part in the planetary control meta-game."
  var talus_info0 = "Talus is another planet in the Corellian system, and orbits with its sister planet, Tralus, around a common center of gravity. Although it is similar to Corellia, it isn't as well known and is much less populated. Talus is more difficult than Corellia, but its wildlife is usually easy to handle.Some notable points of interest are the Detainment Centre, the lost village of Durbin, and the Kahmurra Biogenetic Research Station. Talus is also home to the mighty Tortur, one of the most visually-impressive creatures in Star Wars Galaxies."
  var dantooine_info0 = "Dantooine is an unspoilt planet dominated by sprawling purple grasslands. The native species, the Dantari, live along the coasts and rarely pose a threat to players unless provoked. Although they are primitive, they are, in an evolutionary sense, Dantooine's highest native life from.. Much of the planet's wilderness is comprised of peculiarly shaded purple fields. Despite this, Dantooine is one of the more adventurous and dangerous planets due to its wildlife and inhabitants. Only three small outposts are on the planet."
  var dathomir_info0 = "Dathomir is an isolated, dangerous planet in the Outer Rim. Not many dare to adventure to its dark and feared lands. The environment is mostly a jungle covered in fog, making visibility difficult. Sunlight barely breaches the cloudy sky. Only a few minor outposts have been created on the planet due to its hazards and cruel lifeforms. Often thought to be the most difficult planet with the majority of creatures and enemies being aggressive. Even travelling by speeder is not a completely safe way to travel. Like the other advanced planets, players may not place houses."
  var endor_info0 = "Endor is one of the many planets in the game located in the Outer Rim. It's completely covered in a dense forest; however, unlike Dathomir or Yavin IV, Endor's jungle is bright with high-rising trees. The planet is very secluded and is known to be one of the more dangerous planets. Players are unable to place houses on Endor, but there is a lot to explore and tough creatures to hunt. It is home to Ewoks and many other species."
  var lok_info0 = "Lok, a planet belonging to the Karthakk System, is a barren wasteland controlled by a famous Feeorin pirate and smuggler named Nym. Nym is an active employer of local adventurers and is always interested in hiring help for sometimes less-than-legal activities. Although the warlord is not overtly anti-imperial, he does work closely with the Alliance on occassion and allows one of their pilot trainers to use his palace as a training ground. Nym controls the influx of individuals to his planet by making sure that his starport is the only one on the entire planet."
  var kashyyyk_info0 = "Kashyyyk, a verdant and tree-covered world, was introduced in the Rage of the Wookiees expansion. Upon first landing on the planet, visitors may note with dismay the small planetary map that appears. From this initial glimpse, one might assume Kashyyyk no larger than one-twentieth the size of a standard planet, when this is not the case. Kashyyyk is split up into multiple zones, such as Kachirho, the Etyyy Hunting Grounds, the Rryatt Trail, each with its own map and unique temperament. The zones are of varying difficulty, as well; Kachirho, the player's starting location, is a generally friendly place with peaceful animals, while places like the Rryatt Trail are more dangerous. "
  var rori_info0 = "Rori is one of three moons of Naboo. It was officially colonized long ago by King Narmle, who dreamt of making Rori into as great a world as Naboo. However, he disappeared later in his life, likely due to his failure to realize that dream. Since then, Rori has been seen as property of Naboo and constantly trades with its parent planet. It is regarded to be one of the more difficult beginning planets. Rori is slightly different from it's parent planet in climate, as it has a it has a more swampy and more densely forested geo than Naboo and is much less populated. It is also much more mysterious as a result, with many interesting areas of exploration available. "
  var mustafar_info0 = "Mustafar, introduced in the Trials of Obi-Wan expansion, is a world dominated by massive, fire-spewing volcanoes. "

  var tatooine = "Tatooine"
  var naboo = "Naboo"
  var yavin4 = "Yavin IV"
  var alderaan = "Alderaan"
  var corellia = "Corellia"
  var talus = "Talus"
  var dantooine = "Dantooine"
  var dathomir = "Dathomir"
  var endor = "Endor"
  var lok = "Lok"
  var kashyyyk = "Kashyyyk"
  var rori = "Rori"
  var mustafar = "Mustafar"

  if(user_data00 === tatooine)
  {
    document.getElementById("output0").innerHTML = "climate = arid; diameter = 10465km2; gravity = 1 standard." + tatooine_info0 
  }
  else if(user_data00 === naboo)
  {
    document.getElementById("output0").innerHTML = "climate = temperate; diameter = 12120km2; gravity = 1 standard." + naboo_info0
  }
  else if(user_data00 === yavin4)
  {
    document.getElementById("output0").innerHTML = "climate = temperate, tropical; diameter = 12500km2; gravity = 1 standard." + yavin4_info0
  }
  else if(user_data00 === alderaan)
  {
    document.getElementById("output0").innerHTML = "climate = temperate; diameter = 10200km2; gravity = 1 standard." + alderaan_info0
  }
  else if(user_data00 === corellia)
  {
    document.getElementById("output0").innerHTML = corellia_info0
  }
  else if(user_data00 === talus)
  {
    document.getElementById("output0").innerHTML = talus_info0
  }
  else if(user_data00 === dantooine)
  {
    document.getElementById("output0").innerHTML = dantooine_info0
  }
  else if(user_data00 === dathomir)
  {
    document.getElementById("output0").innerHTML = dathomir_info0
  }
  else if(user_data00 === endor)
  {
    document.getElementById("output0").innerHTML = endor_info0
  }
  else if(user_data00 === lok)
  {
    document.getElementById("output0").innerHTML = lok_info0
  }
  else if(user_data00 === kashyyyk)
  {
    document.getElementById("output0").innerHTML = kashyyyk_info0
  }
  else if(user_data00 === rori)
  {
    document.getElementById("output0").innerHTML = rori_info0
  }
  else if(user_data00 === mustafar)
  {
    document.getElementById("output0").innerHTML = mustafar_info0
  }
  else if(user_data00 != tatooine)
  {
    document.getElementById("output0").innerHTML = "Incorrect, try again";
  }
}
