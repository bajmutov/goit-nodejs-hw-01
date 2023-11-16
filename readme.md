Хмара з скріншотами виконання
https://monosnap.com/list/655664dac99da18b077a00ca

# Отримуємо і виводимо весь список контактів у вигляді таблиці

node index.js --action="list"

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

# Редагуємо контакт

node index.js --action="update" --id j9WwIg9YHrEB92SRmq0YM --name MangoBingo --email mangoBingo@gmail.com --phone 666-666-666
