# Sequelize intro

## Как начинали работу

   1.  `npm init -y` - инициализируем проект node
   1. `npm i sequelize` и `npm i pg pg-hstore` - устанавливаем зависимости postgres
   1. `npm i -D sequelize-cli` - устанавливаем sequelize cli
   1. `npx sequelize-cli init` - создаём структуру для работы с sequelize

## Что сделали

   1. Создали модель командой `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string` (изменили под себя)
        - Одновременно с этим создалась миграция
        - **Если поменяли что-то в модели - меняем и в миграции**
   1. Накатили миграцию
   1. Создали seeder командой `npx sequelize-cli seed:generate --name demo-user` (изменили под себя)

## На что обратить внимание

   1. Когда пишем seeder, поля `createdAt` и `updatedAt` нужно заполнить
   1. Чтобы создать свяь (один ко многим), нужно:
       - в модели `Post`:
        ```JavaScript
             static associate(models) {
                 this.belongsTo(models.User, {
                     foreignKey: 'author',
                 });
                 }
                 ```
        - в модели `User`:
            ```
            static associate(models) {
            this.hasMany(models.Post, {
            foreignKey: 'author',
            });
            }
            ```
        - в миграции `create-post`:
            ```
            author: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: 'Users',
                },
            key: 'id',
            },
            }
            ```
