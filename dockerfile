FROM nginx:stable-alpine
# Remove default nginx content (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site into Nginx web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Use default nginx CMD