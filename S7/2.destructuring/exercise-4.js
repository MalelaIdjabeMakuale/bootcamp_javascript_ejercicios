const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;
console.log(name, itv); 

const caryear = {
    name: 'Mazda 6',
    itv: [2015, 2011, 2020]
  };
  
  const [year1, year2, year3] = car.itv;
  

  console.log(year1, year2, year3);