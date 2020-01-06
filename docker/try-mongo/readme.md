docker stop $(docker ps -a -q)
docker  rm $(docker ps -a -q) 
docker run -p 27017:27017 -d --name mongodb 18400f87db91
docker run -d --name nodeapp --link=mongodb:mongodb -p 3001:3001 node