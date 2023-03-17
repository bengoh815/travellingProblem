import sqlite3
import pandas as pd

# for future playing with two tables
def add_geo():
    pass

def connect(path):
    try :
        return sqlite3.connect(path)
    except sqlite3.Error as e:
        print("Error connecting to db", e)
        return None

def disconnect(con):
    con.close()
    return True

def createTable(con, tableName, tableCols):
    query = "CREATE TABLE IF NOT EXISTS {0}({1})".format(tableName, tableCols)
    cur = con.cursor()
    cur.execute(query)
    cur.close()
    print("Succesful initialization of database.")

def exist(con, tableName):
    query = """
    SELECT name FROM sqlite_master 
    WHERE type='table'
    AND name='{0}'""".format(tableName)
    cur = con.cursor()
    listOfTables = cur.execute(query).fetchall()
    cur.close()
    return (listOfTables != [])

def addUser(con, tableName, cols, data):
    try:
        cur = con.cursor()

        query = """INSERT INTO {0} {1} VALUES {2}""".format(tableName, cols, data)
        cur.execute(query)
        con.commit()
        # print("Success data insert into sqlite table.")
        cur.close()
        return True
    except sqlite3.Error as error:
        print("Failed to add data into table.", error)
        return False

# add_user("Candice", "+1 (723) 938-9827", 9)

def getUser(con, tableName, cols, query):
    # query?
    try:
        cur = con.cursor()

        # query = """INSERT INTO {0} {1} VALUES {2}""".format(tableName, cols, data)
        cur.execute(query)
        con.commit()
        cur.close()
        return True
    except sqlite3.Error as error:
        print("Failed to get data from table.", error)
        return False

def updateUser(con, tableName, cols, data):
    try:
        cur = con.cursor()

        # query = """INSERT INTO {0} {1} VALUES {2}""".format(tableName, cols, data)
        cur.execute(query)
        con.commit()
        cur.close()
        return True
    except sqlite3.Error as error:
        print("Failed to get data from table.", error)
        return False


def delUser(con, tableName, ):
    # how to delete what paras needed
    try:
        cur = con.cursor()

        # query = """INSERT INTO {0} {1} VALUES {2}""".format(tableName, cols, data)
        cur.execute(query)
        con.commit()
        cur.close()
        return True
    except sqlite3.Error as error:
        print("Failed to get data from table.", error)
        return False
