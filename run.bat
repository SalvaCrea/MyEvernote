@echo off
echo Ready for start dev server.
start php -S 127.0.0.1:8000 -t public
start npm run dev-server
