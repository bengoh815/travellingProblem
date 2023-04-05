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
    # aliasTable also might not have new numbers as it updates
    # modify aliastable to be more general use
    res = db.toNums(con, aliasTable, userNames)
    userNums.extend(res)


    userLocs = list()
    process = list()

    for user in userNums:
        if (db.userExists(con, usersTable, user)):
            # assume all data exists and not empty
            # this should return (name, (long, lat))
            userData = db.getLocation(con, usersTable, user)
            userLocs.append(userData)
        else:
            process.append(user)

    # add new users
    if (len(process) != 0):
        print("Users not found in database: ", len(process))
        # for user in process:
        # ask for users info
        # get their long, lat data
        # 
        # cols = "(name, cell_number, address, longitude, latitude )"
        # db.addUser(con, usersTable,)
        # 
        # should also add to userLocs

    # userLocs are done
    # display to UI
    


    
    db.disconnect(con)
    print("Closing...")

if __name__ == "__main__":
    main()