Write-Output "Inicia sesión en DockerHub";
#docker login

Write-Output "Creando la imagen de la app...";
docker build -t jsisques/dashboard ..\..\

Write-Output "Subiendo la imagen a DockerHub...";
docker push jsisques/dashboard:latest