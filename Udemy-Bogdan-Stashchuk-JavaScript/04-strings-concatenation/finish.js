/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

//option 1

const myName = 'Sergey'

const mySurname = 'Kulibaba'

const myProfession = 'frontend developer'

const myInfo = 
    'My name is ' + myName  + ' ' + mySurname + ' and I am ' + myProfession

console.log(myInfo)

//option 2 

const myHomeland = 'Ukraine'

const myHomeCity = 'Odessa'

const myDream = 'work in IT'

const myDetails =
    `My homeland is ${myHomeland}, ${myHomeCity}. My dream is ${myDream}`

console.log(myDetails)