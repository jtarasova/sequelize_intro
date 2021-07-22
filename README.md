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
### Связи

***Важно***

Если в миграции вы указываете, что какое-то поле *таблицы А* ссылается на *Таблицу В*, то на момент накатывания миграции с *Таблицей А*, уже должна существовать *Таблица В*. В обратном случае, вы получите ошибку `Table_name is not exist`.


   1. Чтобы создать связь (один ко многим), нужно:
       - в модели `Post`:
        ```JavaScript
             static associate(models) {
                 this.belongsTo(models.User, {
                     foreignKey: 'author',
                 });
                 }
      ```
        - в модели `User`:
      ```JavaScript
            static associate(models) {
            this.hasMany(models.Post, {
            foreignKey: 'author',
            });
            }
         ```
        - в миграции `create-post`:
      ```JavaScript
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

## Миграции

Чтобы добвить новое поле в таблицу, нужно: 

   1. Создать миграцию командой 
    
   ```npx sequelize-cli migration:create --name new_column_in_user```
    
   2. Изменить миграцию с использованием
    
   ```JavaScript queryInterface.addColumn ```

      и

   ```queryInterface.removeColumn ``` 
   
   3. Добавить новое поле в модель `User` 
   4. Запустить миграцию 
   
   ```npx sequelize-cli db:migrate```
