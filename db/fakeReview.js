const faker = require("@faker-js/faker");
faker.setLocale('en_US');
const randomName = faker.name.findName();
const randomPhoto = faker.image.food();
const randNoun = faker.word.noun();
const adjective = faker.word.adjective();
let randReview;
function createRandomReview (){
let randReview = ``;
return randReview
}