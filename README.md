#Water My Plants API:

##herokuurl


##Authentication Endpoints:

#Register
[POST] /api/auth/register


#Login
[POST] /api/auth/login


##Plants

###Get all plants for user:
[GET] /api/:id/plants


###Get individual plant:
[GET] /api/:id/plants/:plantId

###Add a Plant
[POST] /api/:id/plants

#Edit a Plant
[PUT] /api/:id/plants/:plantId

#Delete a Plant
[DELETE] /api/:id/plants/:plantId
