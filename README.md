# Dashboard

## Docker

Para crear la imagen de docker

docker build -t jsisques/dashboard .
docker run -it -p 4000:3000 jsisques/dashboard

Hay que subirla al repo

docker push jsisques/dashboard:latest
