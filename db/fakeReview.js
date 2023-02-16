const faker = require("@faker-js/faker");
faker.setLocale('en_US');
const Review = require("../models/Review");
const User = require("../models/User");
const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        // MySQL password
        password: 'chicken',
        database: 'etb_db'
    },
);
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let photo = faker.image.food();
let noun = faker.word.noun();
let adverb = faker.word.adverb();
let adjective = faker.word.adjective();
let interjection = faker.work.interjection();
let randRating = faker.datatype.number({ max: 5 });
let rEmail = faker.internet.email();
let rPassword = faker.internet.password();
let newUser;
let newReview;

async function createRandomUser () {
    let user = await new User.init({
        userName: {firstNamelastName},
        firstName: {firstName},
        lastName: {lastName},
        email: {rEmail},
        password: {rPassword}
    });
    newUser = [firstNamelastName,firstName,lastName,email,password];
    return user
}

async function createRandomReview () {
let randReview = await
`Reviewing: ${adjective} ${noun}
By: ${firstName} ${lastName}
${photo}
The food was quite ${adverb} ${adjective}!
${interjection}
${randRating}/5!!!
`;
return randReview
}

async function createRandomReview () {
let PO = await new Review.init({
    reviewBody: {createRandomReview},
    foodRating: {randRating},
    locationRating: {randRating},
    overallRating: {randRating},
});
newReview = [createRandomReview, randRating, randRating, randRating];
return PO;
}

db.query(`USE etb_db`);
db.query(`INSERT INTO user(userName,firstName,lastName,email,password) VALUES(?,?,?,?,?)`,
newUser);
db.query(`INSERT INTO review(reviewBody,foodRating,locationRating,overallRating) VALUES(?,?,?,?)`,
newReview);

