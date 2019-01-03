ls: ls

install:
	composer install 
	yarn install 

dev-server: 
	php bin/console server:start *:8080
	npm run dev-wath