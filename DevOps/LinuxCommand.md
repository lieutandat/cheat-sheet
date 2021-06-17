# Nginx
## Update Folder Permission
```shell
chmod 755 /var/www
chown -R nginx /var/www
```

# InBound
## Ubuntu
```shell
sudo ufw enable
sudo ufw status
sudo ufw status verbose

sudo ufw allow ssh
sudo ufw allow 6000:6007/tcp
sudo ufw allow 6000/tcp
sudo ufw allow from 203.0.113.4

sudo ufw delete allow 80
```
