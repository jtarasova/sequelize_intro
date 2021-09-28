// console.log('hello');
const db = require('./models/index');
const {
  Sequelize: { Op },
  User,
  sequelize,
} = db;

const main = async () => {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
    const usr = await User.create({ name: 'Igoro', email: 'in@mailo.ru' });
  //   console.log(usr.dataValues);
  //   const allUsers = await User.findAll({
  //     where: { name: 'George Bla' },
  //     raw: true,
  //   });
  //   //   console.log(allUsers);
  //   let d1 = new Date(2021, 06, 22);
  //   let d2 = new Date(2021, 06, 21);
  //   console.log(d1);
  //   let a = await User.findAll({
  //     attributes: ['name', 'email'],
  //     where: {
  //       createdAt: {
  //         [Op.between]: [d2, d1],
  //       },
  //     },
  //     raw: true,
  //   });
  //   console.log(a);

  //   let a = await User.findOne({ where: { name: 'George Bla' }, raw: true });
  //   let b = await User.findAll({ where: { name: 'George Bla' }, raw: true });
  //   a.email = 'george@blahh.bla';
  // await a.save();
  //   console.log(a);
  //   console.log(b);
};

main();
