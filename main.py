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

    # Connection to database
    con = db.connect("env/mainDB.db")

    # Database initilizer
    usersTable = "users"
    if db.exist(con, usersTable) == False:
        format = """
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(255) NOT NULL,
            cell_number VARCHAR(255) NOT NULL UNIQUE,
            address TEXT,
            longitude REAL, 
            latitude REAL
        """
        db.createTable(con, usersTable, format)
    # print("Database exists:", db.exists())

    aliasTable = "alias"
    if db.exist(con, aliasTable) == False:
        format = """
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            alias VARCHAR(255) NOT NULL,
            cell_number VARCHAR(255) NOT NULL UNIQUE
        """
        db.createTable(con, aliasTable, format)
    


    # Get input
    userNums, userNames = parseInput()

    # Convert names to nums
    res = db.toNums(con, aliasTable, userNames)
    userNums.extend(res)

    # check db
    # if anything then update their info

    people = list()
    locations = list()
    # users that need to be fixed
    # set locations such that if location is missing, then get location and then immdiate ly put long lat or else nothing?
    process = list()
    # error codes
    # 0 doesnt exist
    # 2 found multiple

    # check by userNum first


# does user exist in db
# if exist get long and lat and put into locations
# if not input new user

    # locations = list()
    # populate with (user, (long, lat))

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