"""To parse input of WhatsApp text"""

# main idea is to parse ] to : and check if there is word "Going." / "Going"
# need to think of a funny word
# assuming each text message box is per line

def parseInput():
    # returns the people coming
    resNum = list()
    resName = list()

    with open("./env/input.txt", "r") as f:
        lines = f.readlines()
        for line in lines:
            line = line.strip('\n')
            start = line.find(']') + 2
            line = line[start:]
            # colon split
            split = line.find(':')

            identifier = line[:split]
            msg = line[(split + 2):]

            # filter out
            if (msg == "Going" or msg == "Going." or msg == "Going!"):
                # check identifier
                if identifier.startswith("+1"):
                    resNum.append(identifier)
                else:
                    resName.append(identifier)

    return resNum, resName


def getLocations(userNames):
    # only need name, location
    # in other words, name, long, lat

    for user in userNames:
        cols = "name, longitude, latitude"
        # condition = "name='{0}'".format(user)
        # condition = "name='+1 (205) 678-4065'"

        userData = db.getUser(con, table, cols, condition)
        
        if len(userData) == 0:
            # print("Missing user.")
            process.append((0, user))
        elif len(userData) > 1:
            # this would probably never happen
            # print("Multiple users found.")
            process.append((2, user))
        else:
            people.append(userData[0][0])
            locations.append((userData[0][1], userData[0][2]))


    pass

def getLocationsNum(userNums):
    for user in userNums:
        cols = "name, longitude, latitude"
        # condition = "cell_number='{0}'".format(user)
        condition = "cell_number='+1 (205) 678-4065'"

        userData = db.getUser(con, table, cols, condition)
        
        if len(userData) == 0:
            # print("Missing user.")
            process.append((0, user))
        elif len(userData) > 1:
            # this would probably never happen
            # print("Multiple users found.")
            process.append((2, user))
        else:
            people.append(userData[0][0])
            locations.append((userData[0][1], userData[0][2]))
    print(people)
    print(locations)


def getLocationsName():
    pass