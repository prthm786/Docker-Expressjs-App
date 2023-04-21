# Commands Used 

### Building docker image
`$ docker build -t mynodejsapp:1.0 .`

### Listing all docker images
`$ docker images`

### Creating docker container using our image 
`$ docker run -itd -p 5000:5000 --name mycontainer <imageId>`

### Checking Container
`$ docker ps`

### Executing commands inside container
`$ docker exec -it <container_hash> bash`

`$ curl localhost:5000/`

### Removing container 
`$ docker rm -f <container_hash>`

### Removing Image 
`$ docker image rm <image_hash>`