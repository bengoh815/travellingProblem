import pandas as pd

def loadAllDB():
    print("Loading databases...")
    userDB = load_userDB()
    geoDB = load_DB()
    print("Finished loading")
    return userDB, geoDB

def load_userDB():
    # special handling for users
    db = dict()
    return db

def load_DB():
    db = pd.read_csv("./geoDB.csv")
    print(db)
    return db