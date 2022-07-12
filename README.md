## Running the application

#### Install node modules
```shell
npm install --save # or
yarn instll
```

#### Create a .env file for DB parameters
```shell
touch .env

# add the parameters below 
#HOST=<password>
#USERNAME=<password>
#PASSWORD=<password>
#DB=<password> || priori
```

#### Run the appliction
```shell
npm run start
```


#### Run the test Application

##### Save blocks
```http request
POST /blocks HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cookie: connect.sid=s%3AFNpjvH_GyRd_8rQWMWJR8kT5rQ4cztXK.KMghUIPvxQImvLwXz9m9EoLJmYNhQnwsQjEepiAiMi4
Content-Length: 62

{
    "clear": false, // true or false
    "latestNBlock": 2 // number of latest blocks to fetch
}
```

##### Retrieve blocks
```http request
GET /block/<block number || 15128141> HTTP/1.1
Host: localhost:3000
Cookie: connect.sid=s%3AFNpjvH_GyRd_8rQWMWJR8kT5rQ4cztXK.KMghUIPvxQImvLwXz9m9EoLJmYNhQnwsQjEepiAiMi4
```


