export const planetData: Record<
  string,
  { intro: string; facts: string[] }
> = {
  mercury: {
    intro: "The smallest and closest planet to the Sun.",
    facts: [
      "Radius: 2,439 km",
      "Orbits Sun every 88 Earth days",
      "No moons",
      "Surface temperatures range from -173°C to 427°C"
    ]
  },
  venus: {
    intro: "A rocky planet with thick, toxic atmosphere and extreme heat.",
    facts: [
      "Radius: 6,052 km",
      "Orbits Sun every 225 Earth days",
      "No moons",
      "Hottest planet in the Solar System (~465°C)"
    ]
  },
  earth: {
    intro: "Our home planet, the only known place with life.",
    facts: [
      "Radius: 6,371 km",
      "Orbits Sun every 365 days",
      "Has one moon",
      "70% surface covered with water"
    ]
  },
  mars: {
    intro: "The Red Planet, target for future human missions.",
    facts: [
      "Radius: 3,389 km",
      "Orbits Sun every 687 Earth days",
      "Two moons: Phobos & Deimos",
      "Home to Olympus Mons (largest volcano in Solar System)"
    ]
  },
  jupiter: {
    intro: "The largest planet, a gas giant with iconic Great Red Spot.",
    facts: [
      "Radius: 69,911 km",
      "Orbits Sun every ~12 Earth years",
      "At least 95 moons (including Ganymede, the largest moon)",
      "Great Red Spot is a giant storm lasting centuries"
    ]
  },
  saturn: {
    intro: "Famous for its spectacular ring system.",
    facts: [
      "Radius: 58,232 km",
      "Orbits Sun every ~29 Earth years",
      "Over 145 moons (including Titan)",
      "Rings are mostly ice and rock"
    ]
  },
  uranus: {
    intro: "An ice giant that rotates on its side.",
    facts: [
      "Radius: 25,362 km",
      "Orbits Sun every ~84 Earth years",
      "27 known moons",
      "Axial tilt is 98°, causing extreme seasons"
    ]
  },
  neptune: {
    intro: "The farthest known planet, a windy ice giant.",
    facts: [
      "Radius: 24,622 km",
      "Orbits Sun every ~165 Earth years",
      "14 known moons (Triton is the largest)",
      "Strongest winds in Solar System (up to 2,100 km/h)"
    ]
  },
  pluto: {
    intro: "A dwarf planet in the Kuiper Belt, reclassified in 2006.",
    facts: [
      "Radius: 1,188 km",
      "Orbits Sun every 248 Earth years",
      "5 moons (largest is Charon)",
      "Surface has mountains, glaciers, and possible subsurface ocean"
    ]
  }
};

  