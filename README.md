# Nestjs simple application
This is a simple application using nestjs.

## Build
Inside the api directory type the following command:
```
yarn install
```

### Database

#### .env configuration
Create a file called .env with the following settings:
```
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = test
TYPEORM_PASSWORD = test
TYPEORM_DATABASE = test
TYPEORM_PORT = 5432
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = entity/*.js,**/modules/**/entities/*.js
```
Note: These are default database settings.

#### Start database
To start the database (PostgreSQL), simply navigate to the api directory and type the following command, if you have already installed docker:
```
docker-compose up
```

## Run project
To start the project just type the following command:
```
yarn start:dev
```

## Collection
In collection folder there is a .json file with the requests. List request example with pagination:
```gql
{
    students(
        paging: {
          offset: 1
          limit: 4
        }
    ){
        nodes{
            id
            key
            name
        }
        totalCount
    }
}
```


## Author
* **Igor Cardoso** - *Initial work* - [igorxcardoso](https://github.com/igorxcardoso)

## License
This project is licensed under an MIT license - see file [LICENSE.md](LICENSE.md) for more details.
