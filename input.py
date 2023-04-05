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

def newUserInput(user):
    data = [None]*5
    data[1] = user

    print("This user {0} is not found.")
    while True:
        list[0] = input("Name of user: ")
        list[2] = input("Address of user: ")
        i = input("Confirm correct information (Y/N): ")
        if (i == "Y"):
            break
    print("---------------------------")
