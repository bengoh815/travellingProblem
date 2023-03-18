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

    # Database initilizer
    if db.exist(con, "users") == False:
        db.init(con)
    # print("Database exists:", dbExists())

    # Get input
    # parseInput() 

    res = db.getUser(con, "users", "name, cell_number", "WHERE 'John' IN(name, cell_number)")
    # try this out

    print(res)
    
    db.disconnect(con)
    print("Closing...")

if __name__ == "__main__":
    main()