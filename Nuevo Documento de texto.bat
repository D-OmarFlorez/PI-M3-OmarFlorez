@echo off
start cmd /k "cd back && npm start"
start cmd /k "cd front && npm run dev"
start "" "C:\Program Files\Google\Chrome\Application" "http://localhost:3000"
