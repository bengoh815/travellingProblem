import db
import input

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

    aliasTable = "alias"
    if db.exist(con, aliasTable) == False:
        format = """
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            alias VARCHAR(255) NOT NULL,
            cell_number VARCHAR(255) NOT NULL UNIQUE
        """
        db.createTable(con, aliasTable, format)

    # Get input
    userNums, userNames = input.parseInput()

    # Convert names to nums
    res = db.toNums(con, aliasTable, userNames)
    userNums.extend(res)

    userLocs = list()
    process = list()

    for user in userNums:
        if (db.userExists(con, user)):
            # returns (name, long, lat)
            userData = db.getLocation(con, usersTable, user)
            userLocs.append(userData)
        else:
            process.append(user)

    # add new users
    if (len(process) != 0):
        print("Users not found in database: ", len(process))
        for user in process:
            # userData = input.newUserInput(user)
            print("careful", user)
            userData = ('kev', '+1 (608) 982-2157', '344 West Dayton Street', -89.39116, 43.07339)

            cols = "(name, cell_number, address, longitude, latitude )"
            # db.addUser(con, usersTable, cols, userData)

            # should also add to userLocs
            index = userNums.index(userData[1])
            userNums.append(userNums.pop(index))
            userLocs.append((userData[0], userData[3], userData[4]))

    
    db.disconnect(con)
    print("Closing...")

if __name__ == "__main__":
    main()