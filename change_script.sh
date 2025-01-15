echo 'changing app...'

# change app
docker exec -it kyu-deployment-kyu-analytics-frontend-1 /bin/sh -c 'rm -rf /app'   
docker cp app kyu-deployment-kyu-analytics-frontend-1:/app

# rebuild and run
docker exec -it kyu-deployment-kyu-analytics-frontend-1 /bin/sh -c 'npm run build'
docker exec -it kyu-deployment-kyu-analytics-frontend-1 /bin/sh -c 'npm run start'

echo 'changins successed'

