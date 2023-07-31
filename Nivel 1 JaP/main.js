let aviones=[{
    empresa: "McDonnell Douglas",
    nombre: "F-15 Eagle",
    tipo: "Caza, Cazabombardero",
    velocidad: 2575
  },{
    empresa: "Lockheed",
    nombre: "F-117 Nighthawk",
    tipo: "Bombardero nocturno",
    velocidad: 1100 
  },{
    empresa: "General Dynamics",
    nombre: "F-111 Aardvark",
    tipo: "Caza táctico, interdictor",
    velocidad: 2655
  },{
    empresa: "Grumman",
    nombre: "F-14 Tomcat",
    tipo: "Caza embarcado",
    velocidad: 2485 
  },
  {
    empresa: "Dassault",
    nombre: "Rafale",
    tipo: "Caza embarcado",
    velocidad: 1912 
    
  },
  {
    empresa: "Eurofighter",
    nombre: "Typhoon",
    tipo: "Caza táctico",
    velocidad: 2495 
    
  },
  {
    empresa:"Lockheed",
    nombre: "C-5 Galaxy",
    tipo: "Transporte aéreo",
    velocidad: 932 
    
  },
  {
    empresa: "Boeing",
    nombre: "C-17 Globemaster III",
    tipo: "Transporte aéreo",
    velocidad: 950 
    
  },
  {
    empresa: "Rockwell",
    nombre: "B-1 Lancer",
    tipo: "Bombardero",
    velocidad: 1340 
    
  }];

  //genera un recorrido en el array, en base a las empresas aeronáuticas presentes.
    for(let compania of aviones){
    console.log("Empresa: " + compania.empresa);
     }


  //decreta si un avión es supersónico o no.
     let Mach = aviones.filter((avion)=> avion.velocidad > 1236);
     console.log(Mach); 

  

