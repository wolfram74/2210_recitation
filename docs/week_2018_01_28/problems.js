var problems = [
//5 +5 + 4
//'True', 'False'
  {
    description:"The Free body diagram is a form of motion diagram",
    foils:['True', 'False'],
    steps:[
    {
      expression: `-`,
      explanation: "A free body diagram is to visualize the forces involved, while a motion diagram usually depicts a particles position and velocity at various times."
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
    description:"Forces wit ha polar angle between 180 and 270 egrees lie in the 3rd quadrant",
    foils:['True', 'False'],
    steps:[
    {
      expression: `-`,
      explanation: "starting at 1 and going counter clockwise quadrant 3 lies between 180 and 270."
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
    description:"A force is defined in polar coordinates by an angle of 135 degrees and a magnitude of 25.1 N hence the force vector in cartesian corodinates is",
    foils:['(17.7, 17.7)N','(17.7, -17.7)N','(-17.7, 17.7)N','(-17.7, -17.7)N'],
    steps:[
    {
      expression: `\\vec F(F_0, \\theta) = (F_0 cos(\\theta), F_0 sin(\\theta))`,
      explanation: "without even touching the calculator we know the resulting vector is in quadrant 2 so we should expect something (-,+)"
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
    description:"Two ropes support a hanging 20kg crate One (rope A) makes an angle of 75 degrees to the horizontal while the second (rope B) makes an angle of 65 degree, the tension in rope A is",
    foils:['275 N','12.9 N','27.6 N','129 N'],
    steps:[
    {
      expression: `
      \\vec F = 0 \\rightarrow F_x = 0, F_y=0
      `,
      explanation: "We'll interpret hanging to mean the crate is not moving, so forces are all 0."
    },
    {
      expression: `
      F_x = T_{ax}+T_{bx} = 0
      \\\\
      F_y = T_{ay}+T_{by}+F_g=0
      `,
      explanation: "approaching each part of the vector equation independently."
    },
    // {
    //   expression: `T_a = \\frac{mg}{sin(\\theta_a)+ cos(\\theta_a)tan(\\theta_b)}`,
    //   explanation: "NA"
    // },
    {
      expression: `
      \\theta_b = 65
      \\\\
      \\theta_a = 180-75
      `,
      explanation: "If we want to have the math handle the signs, then we need to measure both angles from the same axis."
    },
    {
      expression: `
      tan(\\theta_b) = \\frac{T_{by}}{T_{bx}}
      \\\\
      T_{by} = T_{bx}tan(\\theta_b)`,
      explanation: "relating the y component of B to it's x"
    },
    {
      expression: `
      T_{by} = -T_{ax}tan(\\theta_b)
      \\\\
      F_y = T_{ay}+T_{by}+F_g=0
      \\\\
      F_y = T_{ay}-T_{ax}tan(\\theta_b)-mg=0
      \\\\
      F_y = T_{a}sin(\\theta_a)-T_{a}cos(\\theta_a)tan(\\theta_b)-mg=0
      `,
      explanation: "getting the force in y in terms of things we know"
    },
    {
      expression: `
      T_a(sin(\\theta_a)-cos(\\theta_a)tan(\\theta_b))=mg
      \\\\
      T_a
      =\\frac{mg}{sin(\\theta_a)-cos(\\theta_a)tan(\\theta_b)}

      `,
      explanation: ""
    },
    {
      expression: `NA`,
      explanation: ""
    },
    {
      expression: `NA`,
      explanation: ""
    },
    ]
  },

  {
    description:"Three forces are applied to an object: (34.3 N, 62 degrees); (56.2 N, 125 degrees); and (45.4 N, 251 degrees) resulting in a net force of",
    foils:['(35.2 N, 71.4 degrees)','(35.2 N, 18.6 degrees)','(45.5 N, 133 degrees)','(44.6 N, 71.4 degrees)'],
    steps:[
    {
      expression: `
      \\vec F(F, \\theta) = Fcos(\\theta)\\hat x + F sin(\\theta) \\hat y
      `,
      explanation: "from this we know F1 is mostly up and a bit right, F2 is mostly up and a bit left and F3 is mostly down and a bit left. Since there's probably more right than left then we'd expect to be quadrant 2."
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
    description:"The normal force vector is equal and opposite to the gravitational force",
    foils:['True', 'False'],
    steps:[
    {
      expression: `-`,
      explanation: "only when the surface is at right angles to gravity"
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
    description:"the unit of force, Newtons, is also kg m/s",
    foils:['True', 'False'],
    steps:[
    {
      expression: `-`,
      explanation: "mass times acceleration"
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
    description:"on a 20 degree inclined plane a stationary object will have a normal pointing along an elevation angle of ",
    foils:['90 degrees','20 degrees','110 degrees','70 degrees'],
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
    description:"to lift a 10kg crate a rope must have a tension of ",
    foils:['98.0 N','88.0 N','100.0 N','10.0 N',],
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
    description:"The minimum speed of an amusement car at the top of the loop-the-loop ride that is 6.6 M in diameter ",
    foils:['2.94 m/s', '7.67 m/s', '58.8.94 m/s', '5.69 m/s' ],
    steps:[
    {
      expression: `
      v^2/r
      \\\\
      D/2=r
      `,
      explanation: "NA"
    },
    {
      expression: `
      2v^2/D = g
      \\\\
      v^2 = Dg/2
      `,
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
    description:"Friction can speed you up as you are sliding down an inclined plane",
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
    description:"The terminal velocity of a human falling through air is smaller than that of a cat falling through air",
    foils:['True', 'False'],
    steps:[
    {
      expression: `-`,
      explanation: "depends on the cat."
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
    description:"a 17.7 kg object is sliding down a 55 degree inclined plane on which the coefficient of kinetic friction is .5 has a friction force",
    foils:['5.28 N','51.7 N','99.5 N','73.9 N'],
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
    description:"you drag a 36.7 kg crate across a horizontal floor with a rope at an elevation angle of 23.3 degrees and a tension in the rope of 175 N. the coefficient of kinetic friction is .17. Hence the force of kinetic friction is ",
    foils:['290 N','49.4 N','72.9 N','61.1 N'],
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
    description:"NA",
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
    description:"NA",
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
]
