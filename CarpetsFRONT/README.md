vue tests

For some reason I had to install webpack and webpack-dev-server globally.

Then the vue template worked

sudo npm i -g webpack webpack-dev-server

==
In config/index.js changed the address of the server from localhost to 192.168.33.14 (the box ip)

In order to use ngrok:
# Cahnge teh config/index.js back to localhost
I was getting an invalid headers error
# Run the following: ngrok http 8080 --host-header="localhost:8080"

==
The routes are: http://192.168.33.14:8080/#/test MIND the #

==
Removed the Eslint because it was giving Errors

==
run the app with: sudo npm run dev

==
Interesting links:

# https://vuejs.org/
# https://alligator.io/vuejs/rest-api-axios/
# https://blog.sicara.com/a-progressive-web-application-with-vue-js-webpack-material-design-part-1-c243e2e6e402
# https://ngrok.com/
# https://getmdl.io/
# https://material.io/guidelines/
