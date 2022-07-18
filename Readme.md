# **HOW TO USE THIS APPLICATION AND ITS DOCUMENTATION**

### How is works :blush:

[GET:http://localhost:5500/](http://localhost:5500/)

[GET:http://localhost:5500/?keyword=keyword_here](http://localhost:5500/?keyword=keyword_here)

[PUT:http://localhost:5500/](http://localhost:5500/)For updating Record takes the whole body of the Record

[Delete:http://localhost:5500/](http://localhost:5500/) For Deleting a Record, takes only the ID of the record

### POST:http://localhost:5500/
method:POST
{
    fisrtName,
    lastName,
    address,
    phone,
    email,
    date_of_birth
}

## CORS settings

locate ./config.js and configure the allowed routes
## Dependencies
-[x]Express

