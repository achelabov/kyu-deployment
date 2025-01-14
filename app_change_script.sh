echo 'changing assets and translations...'

# change assets and translations
docker exec -it selfhosting-swetrix-1 /bin/sh -c 'rm -rf /app'   
docker cp app selfhosting-swetrix-1:/

# rebuild and run
docker exec -it selfhosting-swetrix-1 /bin/sh -c 'npm run build'
docker exec -it selfhosting-swetrix-1 /bin/sh -c 'npm run start'

echo 'changing successed'

