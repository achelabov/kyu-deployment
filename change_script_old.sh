echo 'changing app...'

# change app
docker exec -it kyu-deployment-swetrix-1 /bin/sh -c 'rm -rf /app'   
docker cp app kyu-deployment-swetrix-1:/app

# rebuild and run
docker exec -it kyu-deployment-swetrix-1 /bin/sh -c 'npm run build'
docker exec -it kyu-deployment-swetrix-1 /bin/sh -c 'npm run start'

echo 'changins successed'