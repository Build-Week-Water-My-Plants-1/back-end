# Water My Plants API:

### herokuurl: PENDING

## Authentication Endpoints:

### Register

[POST] `/api/auth/register`
Required fields for registering a user:

-username (unique)
-password
-phone_number (unique)

# data schema:

```json
{
  "username": "david",
  "password": "123",
  "phone_number": "(123)456-7810"
}
```

Returns registered user's info, with password hashed.

### Login

[POST] `/api/auth/login`
Required fields for logging in a user:

-username (unique)
-password

# data schema:

```json
{
  "username": "david",
  "password": "123"
}
```

Returns token used for authorization on other endpoints, and user ID.

## Plants

### Get all plants for user:

[GET] `/api/:id/plants`

### Get individual plant:

[GET] `/api/:id/plants/:plantId`

### Add a Plant

[POST] `/api/:id/plants`

### Edit a Plant

[PUT] `/api/:id/plants/:plantId`

### Delete a Plant

[DELETE] `/api/:id/plants/:plantId`

### Data Schemas

### User:

```json
{
  "id": 1,
  "username": "david",
  "password": "123",
  "phone_number": "(123)456-7810"
}
```

### Plants:

```json
{
  "id": 1,
  "common_name": "Rose",
  "scientific_name": "Rosa"
}
```
