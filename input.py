"""To parse input of WhatsApp text"""

# main idea is to parse ] to : and check if there is word "Going." / "Going"
# need to think of a funny word
# assuming each text message box is per line
from geoloc import strToCoord

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

def newUserInput(user):
    # format
    # (name, cell_number, address, longitude, latitude )
    data = [None for _ in range(5)]
    print(data)
    data[1] = user

    print("This user {0} is not found.".format(user))
    while True:
        data[0] = input("Name of user: ")
        data[2] = input("Address of user: ")
        i = input("Confirm correct information (Y/N): ")
        if (i == "Y"):
            break
    print("---------------------------")
    lng, lat = strToCoord(data[2])
    data[3] = lng
    data[4] = lat
    return tuple(data)