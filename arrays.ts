const carMakers = ['ford', 'toyota', 'honda'];

console.log(carMakers.map((car: string) : string => {
  return car.toUpperCase();
}));