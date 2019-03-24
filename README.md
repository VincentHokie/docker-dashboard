[![Build Status](https://travis-ci.org/VincentHokie/docker-dashboard.svg?branch=v1.38)](https://travis-ci.org/VincentHokie/docker-dashboard)

# Docker Dashboard

I created this in response to feeback I've gotten over several months from my team wanting visibility into a dockerized local environment without noise on the terminal or needing to know the docker cli well.

This gives an engineer the ability to quicky and easily gain insight into what's going on under the hood.

## Setup

### Docker for Mac setup

At the moment I've only really done my research on the MacOS, but feel free to contribute for our windows and linux brothers an sisters.

- Expose your docker API locally (usually on port 2345) by running this docker image locally `docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p 127.0.0.1:2345:2345 bobrik/socat TCP-LISTEN:2345,fork UNIX-CONNECT:/var/run/docker.sock`
- Ensure this front-end is allowed to communicate with the API by adding `"api-cors-header" : "http://localhost:8080",` to the daemon json config i.e.

![Docker for Mac example Daemon Config](/media/daemon-config.png?raw=true)

- Then apply and restart
- To confirm that the API can recieve requests from this front-end, run this on your terminal `curl -v -X OPTIONS localhost:2345`, you should be able to see these headers returned

   ```
   < Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, X-Registry-Auth
   < Access-Control-Allow-Methods: HEAD, GET, POST, DELETE, PUT, OPTIONS
   < Access-Control-Allow-Origin: http://localhost:8080
   ```

### Repo setup

- run `npm install`
- then `npm run dev`
- visiting `http://localhost:8080/` on your browser will take you to the dashboard

## Example Screenshots

### Container proccesses
![Processes on a container](/media/container-processes.png?raw=true)

### Network inspection
![Network inspection](/media/network-inspect.png?raw=true)

### Volume inspection
![Volume inspection UI](/media/volume-inspect.png?raw=true)

### Config error page
![Docker configuration error page](/media/error-page.png?raw=true)

## ToDo

- add tests
- chart statistics
- real time updates to UI using docker event streams
- swarm support completion
- beautify logs
- show user resulting docker cli commands
- coveralls integration

## Note

This is a very rough draft, contributions and/or suggestions are very welcome.

This was not created to replace the docker cli, and as such is only useful for seeing what is happening, not doing things i.e. you cannot create, update and delete, only retrieve information.
