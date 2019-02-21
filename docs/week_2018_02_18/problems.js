var problems = [
// 'True', 'False'
//'','','',''
  {
    description:"It is possible to have a satellite in orbit such that it is always over the north pole",
    foils:['True', 'False'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"The earths gravitational force decreases as one goes deeper into a vertical mine shaft",
    foils:['True', 'False'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"The gravitational acceleration on the surface of Mercury[The planet] is ",
    foils:['.27 m/s^2','3.7 m/s^2','1.11 micro m/s^2','0.111 m/s^2'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"The orbital period for a circular orbit at 2000km above the earths surface is",
    foils:['127 minutes',' 71.7 minutes','14.8 minutes',' 1440 minutes'],
    steps:[
    {
      expression: `
      r=R_{earth}+h\\approx 8.37*10^{6}m
      \\\\
      M_{earth} \\approx 5.97*10^{24}
      `,
      explanation: "We are informed of our height above the earth"
    },
    {
      expression: `
      C = 2\\pi r
      \\\\
      T = \\frac{C}{V}
      `,
      explanation: "relating the velocity of our orbit to it's period"
    },
    {
      expression: `\\frac{V^2}{r}=A
      = \\frac{F_g}{m}
      = \\frac{1}{m}\\frac{GM_{earth}m}{r^2}
      = \\frac{GM_{earth}}{r^2}
      \\\\
      \\frac{V^2}{r} = \\frac{GM_{earth}}{r^2}
      \\\\
      V^2 = \\frac{GM_{earth}}{r}

      `,
      explanation: "relating our orbital radius to our orbit velocity"
    },
    {
      expression: `
      T = \\frac{C}{V} \\rightarrow V^2 = \\frac{C^2}{T^2}
      \\\\
      \\frac{C^2}{T^2}= \\frac{GM_{earth}}{r}
      \\\\
      \\frac{C^2r}{GM_{earth}}= T^2
      \\\\
      (\\frac{C^2r}{GM_{earth}})^{1/2}= T
      \\\\
      (\\frac{4\\pi^2r^3}{GM_{earth}})^{1/2}= T
      `,
      explanation: "which given our numerical parameters is about 7624 seconds, or 127 minutes."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"Gravitational potential energy is a negative function becauce we choose the zero value to be at infinity",
    foils:['True', 'False'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"The law of mechanical energy conservation is used to describe planet and satellite orbits.",
    foils:[],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"A satellite orbits Venus at 1.5 times the venus radius from the center of the planet and has a speed of ",
    foils:['7.33 km/s','5.98 km/s','5.83 km/s','6.62 km/s'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"The escape speed of astronauts leaving the moons surface is",
    foils:['5.64 Mm/s','1.68 km/s','2.37 km/s','1.24km/s'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"The center of mass of an object is always located inside the object",
    foils:['True', 'False'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"The conservation of momentum applies to systems with no external net forces",
    foils:['True', 'False'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"A sledge hammer has 5kg metal head located at the end of a 2 m long uniform shaft of mass 1kg, the center of mass of the sledge hammer from its head is ",
    foils:['1.83 m','1.00 m','0.167 m','0.1 m'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    description:"A system has two particles with momentum $&P_1=24 \\hat x + 33\\hat y +14 \\hat z&$ and $&P_2=-16 \\hat x + 23\\hat y - 16 \\hat z&$ the systems total momentum is",
    foils:['(40,56,30)','(8,10,-2)','(8,56,-2)','(0,0,0)'],
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

]
