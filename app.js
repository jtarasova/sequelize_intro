// console.log('hello');
const db = require('./models/index');

const main = async () => {
  await db.sequelize.authenticate();
  console.log('Connection has been established successfully.');
  const usr = await db.User.create({ name: 'Igoro', email: 'in@mailo.ru' });
  console.log(usr.dataValues);
};

main();
