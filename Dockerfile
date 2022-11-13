FROM nginx:alpine
COPY . /corymassaro.com
EXPOSE 8001
CMD ["npm", "run", "deploy"]
