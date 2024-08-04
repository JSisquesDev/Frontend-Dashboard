Write-Output "Inicia sesión en DockerHub";
#docker login

Write-Output "Creando la imagen de la app...";
docker build --no-cache -t jsisques/clinicabot-dashboard .

Write-Output "Subiendo la imagen a DockerHub...";
docker push jsisques/clinicabot-dashboard:latest