var problems = [

  {
    description:"Speed is the same as average velocity",
    foils:['True', 'False'],
    steps:[
    {
      expression: `-`,
      explanation: "A conceptual question, velocities are always vector quantities while speeds are scalars, so false."
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
    description:"Acceleration is the second derivative of position with respect to time.",
    foils:['True', 'False'],
    steps:[
    {
      expression: `\\frac{d}{dt}(\\frac{d}{dt}x(t)) \\equiv a(t)`,
      explanation: "This is the definition of acceleration, so yes, true."
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
    description:"The position is given by the formula $&x(t)=3t+10t^3-5&$ and the instantaneous velocity is given by",
    foils:['$&10t^2&$','$&3t+30t^2-5&$','$&3+20t&$','$&3+30t^2&$'],
    steps:[
    {
      expression: `x(t) \\rightarrow ? \\rightarrow v(t)`,
      explanation: "We are starting with a function for position, and we want a function for velocity."
    },
    {
      expression: `\\frac{d}{dt} x(t) \\equiv v(t)`,
      explanation: "We recall that velocity is defined as the time derivative of position"
    },
    {
      expression: `\\frac{d}{dx} x^n = nx^{n-1}`,
      explanation: "We recall the way derivatives act on simple powers."
    },
    {
      expression: `
      f(x) = g(x)+h(x)
      \\\\
      \\frac{d}{dx} f(x)
      = \\frac{d}{dx} (g(x)+h(x))
      = \\frac{d}{dx} g(x)+\\frac{d}{dx} h(x)
      `,
      explanation: "We recall that derivatives of sums can be broken up and done to each term independently."
    },
    {
      expression: `
      \\frac{d}{dx} x(t)=
      \\frac{d}{dx} 3t+10t^3-5 =
      3+3*10t^2-0 = 3+30 t^2
      `,
      explanation: "Which matches with c."
    },]
  },

  {
    description:"A car travels in a straight line from x=5miles to x=17miles in 45 minutes hence its speed was",
    foils:['7.15 m/s','12 m/s','28.6 m/s','12 miles/hour'],
    steps:[
    {
      expression: `x_i,x_f, \\Delta t \\rightarrow ? \\rightarrow v_{speed}`,
      explanation: "we're starting with two different positions and a passage of time, and want to determine the average speed over this duration. In either miles per hour or meters per second"
    },
    {
      expression: `\\frac{\\Delta x}{\\Delta t} = v_{speed}`,
      explanation: "This is the simplest way to define average speed, but makes use of a quantity we don't have."
    },
    {
      expression: `\\Delta x = x_f-x_i = 12 miles`,
      explanation: "The position traveled in our duration. Since our duration was less than an hour we can rule out d as a valid answer. So we need to also convert to meters and seconds."
    },
    {
      expression: `
      1minute \\equiv 60seconds
      \\rightarrow \\Delta t = 45*60 = 2700 seconds
      \\\\
      1mile \\approx 1.61*10^3 meters
      \\rightarrow
      \\Delta x \\approx 12*1.61*10^3 =19.32 *10^3 meters
      `,
      explanation: "Relevant conversion factors"
    },
    {
      expression: `
      \\frac{\\Delta x}{\\Delta t}\\approx
      \\frac{19.32 *10^3}{2.7 *10^3}=
      \\frac{19.32 }{2.7 }> 18/3 = 6
      \\\\
      \\frac{19.32 }{2.7 } \\approx 7.16
      `,
      explanation: "Matching with option A"
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
