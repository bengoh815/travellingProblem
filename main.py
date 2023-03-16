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

from db import *
from input import parseInput

def main():
    print("Starting up...")

    # Database initilizer
    if dbExists() == False:
        starter()
    # print("Database exists:", dbExists())

    # Get input
    # parseInput()

    print("Closing...")

if __name__ == "__main__":
    main()