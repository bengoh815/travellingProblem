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
    locations = list()



    # for user in userNum:
    #     condition = "WHERE '{0}'".format(user)
    #     db.getUser(con, table, "cell_number", condition)
    #     pass

    # for user in userName:
    #     pass

# does user exist in db
# if exist get long and lat and put into locations
# if not input new user

    locations = list()
    # populate with (user, long, lat)

    # res = db.getUser(con, table, "name, cell_number", "WHERE 'John' IN(name, cell_number)")
    # try this out

    print(res)

    # go through and long and lat
    # go to website and get long and lat?
    # find lib?
    
    db.disconnect(con)
    print("Closing...")

if __name__ == "__main__":
    main()