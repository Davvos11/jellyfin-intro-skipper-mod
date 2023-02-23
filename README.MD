 # Jellfyfin intro-skipper Linuxserver.io mod

 Provides a [docker-mod](https://github.com/linuxserver/docker-mods) to add the [intro-skipper plugin](https://github.com/ConfusedPolarBear/intro-skipper) overlay to the [Linuxserver Jellyfin image](https://hub.docker.com/r/linuxserver/jellyfin).

 Currently based on version `10.8.9+e8a79f654e`.

 ## Usage
 1. First build the mod container using `docker build -t davvos11/jellyfin-intro-skipper-mod`
 2. Add the mod to your Jellyfin container like so (using docker-compose):
    ```yml
    services:
        jellyfin:
            container_name: jellyfin
            image: lscr.io/linuxserver/jellyfin
            ports:
            - 8096:9096
            environment:
            PUID: 1000
            PGID: 1000
            TZ: Europe/Amsterdam
            
            DOCKER_MODS: davvos11/jellyfin-intro-skipper-mod:latest
    ```
