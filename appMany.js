const db = require('./db/models');
const {
  Sequelize: { Op },
  sequelize,
  Cat,
  Dog,
  Dogscats,
} = db;

const manyMain = async () => {
  // await Cat.create({ name: 'Lol', age: 9 });
  // await Cat.create({ name: 'Lil', age: 2 });
  // await Cat.create({ name: 'Lal', age: 4 });
  // await Dog.create({ name: 'Bob', age: 3 });
  // await Dog.create({ name: 'Beb', age: 12 });
  // await Dog.create({ name: 'Bib', age: 8 });
  // const bob = await Dog.findOne({
  //   where: { name: 'Bob' },
  //   // attributes: ['id'],
  //   // raw: true,
  // });
  // const lol = await Cat.findOne({
  //   where: { name: 'Lol' },
  //   // attributes: ['id'],
  //   raw: true,
  // });
  // await Dogscats.create({ dog_id: bob.id, cat_id: lol.id });
  // await Dogscats.create({ dog_id: 3, cat_id: 2 });
  // await Dogscats.create({ dog_id: 2, cat_id: 2 });
  const catsWithFriends = await Cat.findAll({
    include: {
      model: Dog,
      attributes: ['name', 'age'],
      through: {
        model: Dogscats,
        attributes: [],
      },
    },
    order: [['age', 'DESC']],
    raw: true,
  });
  catsWithFriends.map((el) => console.log(el));
  // const catsWithFriends = await Cat.findAll({
  //   order: [[Dog, 'age', 'ASC']],
  //   include: [Dog],
  //   raw: true,
  // });
  // console.log(catsWithFriends);
  // const a = await Cat.findAll({
  //   where: {
  //     age: {
  //       [Op.gte]: 4,
  //     },
  //   },
  // });
  // console.log(a);
};

manyMain();
