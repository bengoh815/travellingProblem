"""To parse input of WhatsApp text"""

# main idea is to parse ] to : and check if there is word "Going." / "Going"
# need to think of a funny word
# assuming each text message box is per line

def parseInput():
    with open("./input.txt", "r") as f:
        print(f.readline())
        pass
    pass