# golang-svelte

# Golang in backend & Svelte in frontend

# GO + SVELTE

# 1) Introduction

.
Z:\golang\go_svelte\svelte-golang-demo-master
.
home (login, logout, register)

patients list view (accessible by nurses & admin, can add/edit patient)

patient view (list of notes, nurses can add new notes and edit existing)
.
frontend, JWT is used to authenticate client (web browser)
.
backend, he backend will be used to authenticate client session by providing JWT tokens.
.
services & data modelling :
.
auth service

/api/v1/session

POST/DELETE (login, logout)

/api/v1/regiser

POST (register new userz)

user service

/api/v1/users

GET

/api/v1/user?user-id=


userid (login id)

name (full name)

secret (salted hashed password)

last-login (not implemented)

created-time

last-modified (not implemented)

patient service

/api/v1/patients

GET (list)
/api/v1/patient?patient-id=

POST/GET/DELETE (single)

/api/v1/patient-notes?patient-id=

GET (list)

/api/v1/patient-note?note-id=

POST (new health note)

GET/DELETE (not implemented)

.

> repository folder structure
> 
project root

-api (folder) - (not implemented)

api definition

swagger/openapi stub generation scripts

-frontend (folder)

src code, svelte

Dockerfiles for dev & testing

-backend (folder)

src code

Dockerfiles for dev & testing

-db-schema (folder)

schema definition

pre-seeded data for dev/testing

db schema migration scripts (https://github.com/golang-migrate/migrate)

db orm generator (sqlboiler, https://github.com/lqs/sqlingo)

...

> 

https://github.com/volatiletech/sqlboiler

SQLBoiler is a tool to generate a Go ORM tailored to your database schema.

# 2) backend

backend

Z:\golang\go_svelte\svelte-golang-demo-master\backend

.

# run

go get

go build
.
# Install postgres library

# ...

# if that doesnt work, try

go get -u -t -v github.com/volatiletech/sqlboiler

go get -u -v github.com/volatiletech/sqlboiler/drivers/sqlboiler-psql

# [!]

# Run

go run main.go

  localhost:8000

## running backend in docker container

# build app as docker image

docker build . -t patient-backend

# run app as docker image

docker run --rm -it -p 8000:8000 patient-backend

# 3) frontend

frontend 

Z:\golang\go_svelte\svelte-golang-demo-master\frontend
.
# download npm dependencies

npm install

Note:

Z:\golang\go_svelte\svelte-golang-demo-master\frontend\node_modules

files generated by node.js [npm install]


# ... Cypress Version: 4.11.0 (..)

# ... Z:\Users\LUR\AppData\Local\Cypress\Cache\4.11.0

# [!]

# run dev mode with hot reload on http://localhost:3000

npm run dev

# build static pages & serve on http://localhost:5000  

npm run export && npx serve __sapper__/export 

# run tests

npm install cypress

npm run test


Browser :

http://localhost:3000

[Register New]

nurse2

key : nurse2nurse2

...


DB :

main.go

"host=localhost dbname=patientdb user=docker password=docker

Z:\golang\go_svelte\svelte-golang-demo-master\db-schema\migrations

patient_note

patient

user


postgre

patienddb

user : postgre

[SQL]

SELECT * FROM patient;

SELECT * FROM user;

SELECT * FROM public.patient_note;

CREATE USER docker SUPERUSER;

ALTER USER docker WITH PASSWORD 'docker';

