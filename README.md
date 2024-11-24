# P1-LesGaulois

Repo GitHub du projet 1 à la WCS Lyon.


## To launch the project and serve statics files :

npx http-server . -p 8080 <!-- port 8080 par défaut de http-server, l'extension Live Server de VSCode utilise le port 5500 par défaut -->


## Build a Docker image and create and execute a container from this image :
docker build -t lesgaulois@latest .
docker run -p 8080:8080 lesgaulois@latest
