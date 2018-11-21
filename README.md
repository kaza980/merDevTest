# Запуск приложения
* Скопировать репозиторий
```
git clone https://github.com/kaza980/merDevTest.git
```
* Открыть папку с проектом
```
cd ./merDevTest
```
* Переключиться на ветвь "components"
```
git checkout components
```
* Установить зависимости
```
npm install
```
* Запустить babel
```
npx babel appComponents.jsx --plugins @babel/plugin-transform-react-jsx --out-file appComponents.js --watch
```
* Открыть `index.html` в браузере

# Запуск сервера
* Установить сервер
```
npm install --global serve
```
* Запустить сервер
```
serve
```
Страница будет доступна по адресу:
* http://192.168.1.6:5000 На мобильном устройстве, подключенном в сеть WIfi
* http://localhost:5000 Из браузера