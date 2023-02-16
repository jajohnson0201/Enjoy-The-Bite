const { faker } = require('@faker-js/faker');
faker.setLocale('en_US');
const Review = require("../models/Review");
const User = require("../models/User");

async function createRandomUser() {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let rPassword = faker.internet.password();
    let rEmail = faker.internet.email();
    let user = await User.create({
        userName: `${firstName}${lastName}`,
        firstName: `${firstName}`,
        lastName: `${ lastName }`,
        email: `${ rEmail }`,
        password: `${ rPassword }`
    });
    return user
}

async function createRandomReview(user) {
    // Create faker data
    let photo = faker.image.food();
    let randRating1 = faker.datatype.number({ max: 5 });
    let randRating2 = faker.datatype.number({ max: 5 });
    let randRating3 = faker.datatype.number({ max: 5 });
    let noun = faker.word.noun();
    let adverb = faker.word.adverb();
    let adjective = faker.word.adjective();
    let interjection = faker.word.interjection();

    let review = `Reviewing: ${adjective} ${noun}
By: ${user.firstName} ${user.lastName}
${photo}
The food was quite ${adverb} ${adjective}!
${interjection}
${randRating3}/5!!!
`;
    Review.create({
        reviewBody: `${ review }`,
        foodRating: `${ randRating1 }`,
        locationRating: `${ randRating2 }`,
        overallRating: `${ randRating3}`,
        userID: `${user.id}`
    });
}

async function seed() {
    // loop 5 times`
    for(var i = 0 ; i < 5 ; i ++){
        console.log(`creating user ${i}`)
        const user = await createRandomUser();
        createRandomReview(user);
    }
}
seed();