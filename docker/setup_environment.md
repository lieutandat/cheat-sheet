## Update apt-get package
```bash
apt-get update
```
## Install Sudo
```bash 
apt-get -y install sudo
```
## Install node
```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - 
sudo apt-get install -y nodejs
```

## Install mp2
```bash
npm install pm2 -g
```
#Start Nodejs app
```bash
cd <app-path>
pm2 start ./bin/www
```
# Step 4 - Install and Configure Nginx as a Reverse proxy
## Install Nginx 
```bash
sudo apt-get install -y nginx
```
## Create Virtual host file
```bash
cd /etc/nginx/sites-available/
vim <app-name>

upstream hakase-app {
    # Nodejs app upstream
    server 127.0.0.1:3000;
    keepalive 64;
}
 
# Server on port 80
server {
    listen 80;
    server_name hakase-node.co;
    root /home/yume/hakase-app;
 
    location / {
        # Proxy_pass configuration
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_max_temp_file_size 0;
        proxy_pass http://hakase-app/;
        proxy_redirect off;
        proxy_read_timeout 240s;
    }
}
```

## Activate the configuration by creating a symlink in the sites-enabled directory.
```bash
ln -s /etc/nginx/sites-available/hakase-app /etc/nginx/sites-enabled/
```

## Test Nginx
```bash
nginx -t
```

## Start Nginx and enable it to start at boot time:
```bash
systemctl start nginx
systemctl enable nginx
```

## Reboot your server, and make sure the node app is running at the boot time:
```bash
pm2 save
sudo reboot
```
