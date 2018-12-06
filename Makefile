ls: ls

install:
	echo $(docker network inspect bridge | grep Gateway | grep -o -E '[0-9\.]+') "symfony.local" >> /etc/hosts
	docker-compose exec php bash
	docker-compose exec php bash
	composer install
	sf doctrine:database:create
	sf doctrine:schema:update --force
	sf doctrine:fixtures:load --no-interaction
	sf3 doctrine:database:create
	sf3 doctrine:schema:update --force
	sf3 doctrine:fixtures:load --no-interaction