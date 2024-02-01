type Planet = "Mercúrio" | "Venus" | "Terra" | "Marte" | "Jupiter" | "Saturno" | "Urano" | "Netuno";

let planet: Planet

let homePlanet: Planet

function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estou na Terra");
  }
}

type GreetingCallback = (name: string) => void

function greet(callbackfn: GreetingCallback) {
  let name = "Ivan";
  callbackfn(name);
}