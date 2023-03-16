import sqlite3
import pandas as pd


# for future playing with two tables
def add_geo():
    pass

# CONSIDER REFACTORING CODE TO BE MORE MANAGABLE INSTEAD OF 
# REMAKING CONNECTIONS AND HAVING DUPLICATE CODE
# def name(con, paras)
#     do something with con and paras

def connect(path):
    try :
        return sqlite3.connect(path)
    except sqlite3.Error as e:
        print("Error connecting to db", e)
        return None

def disconnect(con):
    con.close()
    return True

def init(con, tableName, tableCols):
    query = "CREATE TABLE IF NOT EXISTS {0}({1})".format(tableName, tableCols)
    cur = con.cursor()
    cur.execute(query)
    cur.close()
    print("Succesful initialization of database.")

def dbExists(con, tableName):
    query = """
    SELECT name FROM sqlite_master 
    WHERE type='table'
    AND name='{0}'""".format(tableName)
    cur = con.cursor()
    listOfTables = cur.execute(query).fetchall()
    cur.close()
    return (listOfTables != [])

def add_user(con, tableName, cols, data):
    try:
        cur = con.cursor()

        query = """INSERT INTO {0} {1} VALUES {2}""".format(tableName, cols, data)
        cur.execute(query)
        con.commit()
        # print("Success data insert into sqlite table.")
        cur.close()
        return True
    except sqlite3.Error as error:
        print("Failed to insert data into sqlite table.", error)
        return False

# add_user("Candice", "+1 (723) 938-9827", 9)