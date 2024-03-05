var characters = document.querySelector(".characters-text");
var locations = document.querySelector(".locations-text");
var episodes = document.querySelector(".episodes-text");
var rickCharacter = document.querySelector(".rick");
var summerCharacter = document.querySelector(".summer");
var jerryCharacter = document.querySelector(".jerry");

var anatomyLocation = document.querySelector(".anatomy");
var citadelLocation = document.querySelector(".citadel");
var purgeLocation = document.querySelector(".purge");

var e1Element = document.querySelector(".episode1");
var e2Element = document.querySelector(".episode2");
var e3Element = document.querySelector(".episode3");

var allCharactersContent = document.querySelector(".all-characters");
var allLocationContent = document.querySelector(".all-locations");
var allEpisodesContent = document.querySelector(".all-episodes");

var root = "https://rickandmortyapi.com/api/";
var listName = [];
var listLocation = [];
var listEpisode = [];
var charactersListTriggered = false;
var episodesListTriggered = false;
var locationsListTriggered = false;
rickCharacterTriggered = false;
summerCharacterTriggered = false;
jerryCharacterTriggered = false;
purgeLocationTriggered = false;
citadelLocationTriggered = false;
anatomyLocationTriggered = false;
e1Triggered = false;
e2Triggered = false;
e3Triggered = false;

function getResource(section) {
  return fetch(root + section, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
      throw error;
    });
}

characters.addEventListener("click", function () {
  if (!charactersListTriggered) {
    getCharacter("character");
    charactersListTriggered = true;
    locationsListTriggered = false;
    episodesListTriggered = false;
  }
});

function getCharacter(character) {
  allLocationContent.innerHTML = "";
  allEpisodesContent.innerHTML = "";
  getResource(character)
    .then(function (response) {
      if (response.results && response.results.length > 0) {
        for (var i = 0; i < response.results.length; i++) {
          var name = response.results[i].name;
          listName.push(name);
          var nameContent = document.createElement("div");
          nameContent.classList.add("list");

          nameContent.textContent = name;
          allCharactersContent.appendChild(nameContent);
        }
      } else if (response.name) {
        var name = response.name;
        listName.push(name);
        var nameContent = document.createElement("div");
        nameContent.classList.add("list");

        nameContent.textContent = name;
        allCharactersContent.appendChild(nameContent);
      }
    })
    .catch(function (error) {
      console.error("Error getting characters:", error);
    });
}
function getLocation(location) {
  allCharactersContent.innerHTML = "";
  allEpisodesContent.innerHTML = "";
  getResource(location)
    .then(function (response) {
      if (response.results && response.results.length > 0) {
        for (var i = 0; i < response.results.length; i++) {
          var name = response.results[i].name;
          listLocation.push(name);
          var locationContent = document.createElement("div");
          locationContent.classList.add("list");

          locationContent.textContent = name;
          allLocationContent.appendChild(locationContent);
        }
      } else if (response.name) {
        var name = response.name;
        listLocation.push(name);
        var locationContent = document.createElement("div");
        locationContent.classList.add("list");

        locationContent.textContent = name;
        allLocationContent.appendChild(locationContent);
        }
      
    })
    .catch(function (error) {
      console.error("Error getting characters:", error);
    });
}
function getEpisode(episode) {
  allCharactersContent.innerHTML = "";
  allLocationContent.innerHTML = "";
  getResource(episode)
    .then(function (response) {
      if (response.results && response.results.length > 0){
      for (var i = 0; i < response.results.length; i++) {
        var name = response.results[i].name;
        listEpisode.push(name);
        var episodeContent = document.createElement("div");
        episodeContent.classList.add("list");
        episodeContent.textContent = name;
        allEpisodesContent.appendChild(episodeContent);
      }}
      else if (response.name) {
        var name = response.name;
        listEpisode.push(name);
        var episodeContent = document.createElement("div");
        episodeContent.classList.add("list");
        episodeContent.textContent = name;
        allEpisodesContent.appendChild(episodeContent);
        }
    })
    .catch(function (error) {
      console.error("Error getting characters:", error);
    });
}
locations.addEventListener("click", function () {
  if (!locationsListTriggered) {
    getLocation("location");
    locationsListTriggered = true;
    charactersListTriggered = false;
    episodesListTriggered = false;
  }
});
episodes.addEventListener("click", function () {
  if (!episodesListTriggered) {
    getEpisode("episode");
    episodesListTriggered = true;
    charactersListTriggered = false;
    locationsListTriggered = false;
  }
});
rickCharacter.addEventListener("click", function () {
  if (!rickCharacterTriggered) {
    allCharactersContent.innerHTML = "";
    allEpisodesContent.innerHTML = "";
    allLocationContent.innerHTML = "";
    getCharacter("character/1");
    rickCharacterTriggered = true;
    summerCharacterTriggered = false;
    jerryCharacterTriggered = false;
  }
});
summerCharacter.addEventListener("click", function () {
  if (!summerCharacterTriggered) {
    allCharactersContent.innerHTML = "";
    allEpisodesContent.innerHTML = "";
    allLocationContent.innerHTML = "";
    getCharacter("character/3");
    summerCharacterTriggered = true;
    rickCharacterTriggered = false;
    jerryCharacterTriggered = false;
  }
});
jerryCharacter.addEventListener("click", function () {
  if (!jerryCharacterTriggered) {
    allCharactersContent.innerHTML = "";
    allEpisodesContent.innerHTML = "";
    allLocationContent.innerHTML = "";
    getCharacter("character/5");
    jerryCharacterTriggered = true;
    rickCharacterTriggered = false;
    summerCharacterTriggered = false;
  }
});

purgeLocation.addEventListener(
  "click", function () {
    if (!purgeLocationTriggered) {
      allCharactersContent.innerHTML = "";
      allEpisodesContent.innerHTML = "";
      allLocationContent.innerHTML = "";
      getLocation("location/9");
      purgeLocationTriggered = true;
      citadelLocationTriggered = false;
      anatomyLocationTriggered = false;
    }
  }
);
anatomyLocation.addEventListener(
  "click", function () {
    if (!anatomyLocationTriggered) {
      allCharactersContent.innerHTML = "";
      allEpisodesContent.innerHTML = "";
      allLocationContent.innerHTML = "";
      getLocation("location/5");
      anatomyLocationTriggered = true;
      citadelLocationTriggered = false;
      purgeLocationTriggered = false;
    }
  }
);
citadelLocation.addEventListener(
  "click", function () {
    if (!citadelLocationTriggered) {
      allCharactersContent.innerHTML = "";
      allEpisodesContent.innerHTML = "";
      allLocationContent.innerHTML = "";
      getLocation("location/3");
      citadelLocationTriggered = true;
      anatomyLocationTriggered = false;
      purgeLocationTriggered = false;
    }
  }
);
e1Element.addEventListener(
  "click", function () {
    if (!e1Triggered) {
      allCharactersContent.innerHTML = "";
      allEpisodesContent.innerHTML = "";
      allLocationContent.innerHTML = "";
      getEpisode("episode/1");
      e1Triggered = true;
      e2Triggered = false;
      e3Triggered = false;
    }
  }
);
e2Element.addEventListener(
  "click", function () {
    if (!e2Triggered) {
      allCharactersContent.innerHTML = "";
      allEpisodesContent.innerHTML = "";
      allLocationContent.innerHTML = "";
      getEpisode("episode/2");
      e2Triggered = true;
      e1Triggered = false;
      e3Triggered = false;
    }
  }
);
e3Element.addEventListener(
  "click", function () {
    if (!e3Triggered) {
      allCharactersContent.innerHTML = "";
      allEpisodesContent.innerHTML = "";
      allLocationContent.innerHTML = "";
      getEpisode("episode/3");
      e3Triggered = true;
      e2Triggered = false;
      e2Triggered = false;
    }
  }
);