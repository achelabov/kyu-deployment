echo 'changing assets and translations...'

# change assets and translations
docker exec -it selfhosting-swetrix-1 /bin/sh -c 'rm -rf /app/public'   
docker cp public selfhosting-swetrix-1:/app

# rebuild and run
docker exec -it selfhosting-swetrix-1 /bin/sh -c 'npm run build'
docker exec -it selfhosting-swetrix-1 /bin/sh -c 'npm run start'

echo 'changins successed'

