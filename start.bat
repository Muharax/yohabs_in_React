@echo off
:poczatek
chcp 65001
cls
echo ———————————————–
echo Wybierz z listy
echo ———————————————–
echo.
echo 1) Uruchomić REACT
echo 2) Uruchomić NODE
echo.
set /p opcja=wybierz:
if %opcja%==1 goto opcja1
if %opcja%==2 goto opcja2
:opcja1
cls
echo Uruchamianie REACT ...
npm start
start chrome http://localhost:3000/
pause
goto poczatek
:opcja2
cls
cd ../../node
node server.js
pause
goto poczatek

