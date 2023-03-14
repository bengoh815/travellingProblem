import sqlite3
import pandas as pd

# con = sqlite3.connect("mainDB.db")
# cursor = con.cursor()

# # cursor.execute("""DROP TABLE users""")
# # cursor.execute("""CREATE TABLE IF NOT EXISTS users(
# #     name text,
# #     cell_number text,
# #     id int
# # )""")

# # cursor.execute("""CREATE TABLE IF NOT EXISTS geo(
# #     id int,
# #     address text,
# #     longtitude real,
# #     latitude real
# # )""")

# cursor.execute("""INSERT INTO users ("name", "cell_number", "id")
# VALUES ('John', '+1 (860) 123-2345', 364)
# """)

# con.commit()

# cursor.execute("""SELECT * FROM users""")
# print(cursor.fetchall())

# No issue just head doesnt print all
# df = pd.read_sql_query("SELECT * FROM users", con)
# print(df.head())

# cursor.close()
# con.close()


def add_user(name, cell_number, id):
    try:
        con = sqlite3.connect("mainDB.db")
        cur = con.cursor()

        sqlite_insert = """INSERT INTO users (name, cell_number, id)
        VALUES (?, ?, ?)"""
        data = (name, cell_number, id)
        # check if db has same id?
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