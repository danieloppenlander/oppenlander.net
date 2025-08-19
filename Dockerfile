# syntax=docker/dockerfile:1

############################################
# Runtime: Serve prebuilt static files with Caddy
############################################
FROM caddy:latest

# Copy prebuilt static assets from the local build/ directory
COPY build /usr/share/caddy

# Copy Caddy configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Caddy listens on :80 by default when configured with :80 site address
EXPOSE 80

# The default container command is already set by the Caddy image
