main idea
# interface
# receive input
# parse input
# get ID data from userDB
    # need either name or phone number to ID
    # how bout name to phone number to ID
# get from geoLo data with ID

# show on map

# have tools and options to select
# able to format output
# OR
# implement clustering algo
# OR
# HK solution
# assume all data exists and not empty
# usersDB has to be in sync with geoLocationDB?

top priority
- [ ] start working on geoloc.py
    [ ] determine which is more accurate Nominatim or google maps api
- [ ] implement db.py userExist()
- [ ] finish implmenting db.py getLocation()
- [ ] make userData has the correct format 
    should be on line 45
    after checking if user exists
- [ ] make sure input.py newUserInput() is returning correct format and better UI
- [ ] implement adding new users
    - depends on geoloc.py working
- [ ] implement aliasTable to handle new numbers that might exist
- [ ] modify aliastable to be more general use
- [ ] implement db.py delUser()
lowest priority