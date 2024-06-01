## Actors
- ### Volenteers
      - Signup/Login
      - View avaliable events
      - Register for events(Registration form) 
      - Manage Profile(optional)

- ### Organizers
      - Signup/Login
      - Create and Manage Events
      - View list of registered volenteers for the events



## Mongo Db Schema
    - Users
      - id(primary key) (object id)
      - name
      - password
      - email
      -role -> (volunteer/organizer)

    - Events Table
      - Event_id
      -Event name
      -Des
      -location
      -date time
      - organized_name(self)
      - no of volenteers

    - Regitration Table
        - Event_id
        - name
        - location
        - Registration date
        - descrption
        - pic
        

## APi ENDPOINTS

### Authentication
/api/signup
/api/login

### Event Management
post req -> /api/createEvent
get req called by user  -> /api/getEvents

GEt /api/events/:id

Put /api/events/:id (only organizers)

Delete /api/events/:id 

### Register for event 

here id is event id

- post /api/events/:id/register (volunteer)
- get /api/events/:id/registrations (organizer)
