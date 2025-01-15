echo 'changing app...'

# change app
docker exec -it kyu-deployment-swetrix-1 /bin/sh -c 'rm -rf app && rm -rf public'   
docker cp app/app kyu-deployment-swetrix-1:/app/app
docker cp app/public kyu-deployment-swetrix-1:/app/public

# rebuild and run
docker exec -it kyu-deployment-swetrix-1 /bin/sh -c 'npm run build'
docker exec -it kyu-deployment-swetrix-1 /bin/sh -c 'npm run start'

echo 'changins successed'