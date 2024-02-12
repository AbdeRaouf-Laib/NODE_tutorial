# NODE.js

## Getting started

### installation :

- Windows, look into this page :
  **Download pre-built installer**
  [node download page](https://nodejs.org/en/download/)

- Linux, multiple distributions:

**Arch Linux :**

```bash
pacman -S nodejs npm
```

**Debian as root :**

```bash
curl -fsSL https://deb.nodesource.com/setup_21.x | bash - &&\
apt-get install -y nodejs
```

**Ubuntu :**

```bash
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

- Docker :

**Official Node.js Docker Image**

```bash
docker pull node
```

### staring a new project :

- create a new folder and type this command :

```bash
npm init
```

**package.json** content "just type package name and press <kbd>Enter</kbd>"

```txt
{
  "name": "testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```

this will initialize a new node.js by
creating a new file named package.json
with information about the created package .
