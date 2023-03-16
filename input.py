"""To parse input of WhatsApp text"""

# main idea is to parse ] to : and check if there is word "Going." / "Going"
# need to think of a funny word
# assuming each text message box is per line

def parseInput():
    # returns the number of people coming
    people = list()
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
            print(identifier, msg)
            # people.append(())


    pass

def replaceName(name):
    with open("./known.txt", "r") as f:
        lines = f.readlines()
        for line in lines:
            line = line.strip('\n')
            print(line)
    pass

# parseInput()
# replaceName("smtg")