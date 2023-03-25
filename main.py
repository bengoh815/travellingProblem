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

# usersDB has to be in sync with geoLocationDB?

import db
from input import parseInput

def main():
    print("Starting up...")

    con = db.connect("env/mainDB.db")
    table = "users"
    # Database initilizer
    if db.exist(con, table) == False:
        db.init(con, table)
    # print("Database exists:", db.exists())

    # Get input
    userNum, userName = parseInput()


    # check db
    # if anything then update their info

    people = list()
    locations = list()

    # check by userNum first
    for user in userNum:
        cols = "name, longitude, latitude"
        # condition = "cell_number='{0}'".format(user)
        condition = "cell_number='+1 (205) 678-4065'"
        # take all data
        userData = db.getUser(con, table, cols, condition)
        if len(userData) == 0:
            print("Missing user")
        else:
            people.append(userData[0][0])
            locations.append((userData[0][1], userData[0][2]))
    print(people)
    print(locations)

    # only need name, location
    # in other words, name, long, lat

    # for user in userName:
    #     pass

# does user exist in db
# if exist get long and lat and put into locations
# if not input new user

    # locations = list()
    # populate with (user, long, lat)

    # res = db.getUser(con, table, "name, cell_number", "WHERE 'John' IN(name, cell_number)")
    # try this out

    # print(res)

    # go through and long and lat
    # go to website and get long and lat?
    # find lib?
    
    db.disconnect(con)
    print("Closing...")

if __name__ == "__main__":
    main()