# Apollo Server + Express Boilerplate

An Apollo Server + Express boilerplate for development.
Modularize

### Tech

This server uses a number of open source projects to work properly:

* [Node.js]
* [Express]
* [Apollo Server]
* [Sequelize]
* [Firebase Admin]


### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Directory structure
```
|──src
|  |── assets
|  |── configs
|  |  |── app.js
|  |  |── database.js
|  |  |── index.js
|  |── database
|  |  |── cache
|  |  |  |── index.js
|  |  |── config
|  |  |  |── index.js (Sequelize Database Config)
|  |  |── db-utils
|  |  |  |── password-utils.js
|  |  |── factories
|  |  |  |── index.js
|  |  |  |── user-factory.js
|  |  |──migrations
|  |  |  |── 20200708033404-create-user.js
|  |  |  |── 20200716045813-create-referral.js
|  |  |── models
|  |  |  |── index.js
|  |  |  |── referral.js
|  |  |  |── user.js
|  |  |── seeders
|  |  |  |── 20200708035515-seed-referrer-users.js
|  |  |  |── 20200708045515-seed-referral-users.js
|  |──email
|  |  |──email.pug
|  |  |──transporter.js
|  |──firebase
|  |  |──index.js
|  |  |──serviceAccountKey.json
|  |──graphql
|  |  |──dataloader
|  |  |  |──index.js
|  |  |  |──user.js
|  |  |  |──utils.js
|  |  |──resolvers
|  |  |  |──index.js
|  |  |  |──interfaces
|  |  |  |  |──index.js
|  |  |  |  |──__resolveType.js
|  |  |  |──User
|  |  |  |  |──index.js
|  |  |  |  |──Mutation.js
|  |  |  |  |──Query,js
|  |  |──typedefs
|  |  |  |──User
|  |  |  |──User
|  |  |  |──User
|  |  |  |──User
|  |  |  |──User
|  |  |  |── User
|  |──router
|  |──utils
|  |──server.js
|  |  |──components
|  |  |──index.js
|  |──public
|  |  |──index.html
|──package.json
|──readme.md
|──sequelize-data.json
|──.babelrc
|──.env
|──.eslintrc
|──.sequelizerc


```

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Node.js]: <https://nodejs.org/en/>
   [Express]: <http://expressjs.com/>
   [Sequelize]: <https://sequelize.org/master/>
   [Apollo Server]: <https://www.apollographql.com/docs/apollo-server/>
   [Firebase Admin]: <https://firebase.google.com/docs/admin/setup>
