const profile = {
  name: 'Alex',
  age: 30,
  coords: {
    lat: 2,
    lng: 10
  },
  setAge(age: number) {
    this.age = age
  },
};

const {age}: {age: number} = profile;
const {coords: {lat, lng}} : {coords: {lat: number; lng: number}} = profile
console.log(lat, lng);