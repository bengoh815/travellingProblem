import sqlite3
import pandas as pd

def starter():
    try:
        con = sqlite3.connect("./env/mainDB.db")
        cur = con.cursor()
        cur.execute("""
        CREATE TABLE IF NOT EXISTS users(
            id int,
            name text,
            cell_number text,
            address text,
            latitude real,
            longtitude real
        )
        """)
        cur.close()
        print("Succesful initialization of database.")

    except sqlite3.Error as error:
        print("Error intitalizing db.", error)
    finally:
        if con:
            con.close()

def dbExists():
    try:
        con = sqlite3.connect("./env/mainDB.db")
        cur = con.cursor()
        listOfTables = cur.execute(
    """SELECT name FROM sqlite_master WHERE type='table'
    AND name='users'; """).fetchall()
        cur.close()
        return (listOfTables != [])
        
    except sqlite3.Error as error:
        print("Error checking if database exists.", error)
    finally:
        if con:
            con.close()


def add_user(id, name, cell_number, address, lat, lon):
    try:
        con = sqlite3.connect("mainDB.db")
        cur = con.cursor()

        sqlite_insert = """INSERT INTO users 
        (id, name, cell_number, address, latitude, longtitude)
        VALUES (?, ?, ?, ?, ?, ?)"""
        data = (id, name, cell_number, address, lat, lon)
        cur.execute(sqlite_insert, data)
        con.commit()
        print("Success data insert into sqlite table.")
        cur.close()
    except sqlite3.Error as error:
        print("Failed to insert data into sqlite table.", error)
    finally:
        if con:
            con.close()
            print("Connection closed.")

# add_user("Candice", "+1 (723) 938-9827", 9)

# for future playing with two tables
def add_geo():
    pass