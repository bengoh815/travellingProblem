import sqlite3
import pandas as pd

con = sqlite3.connect("mainDB.db")
cursor = con.cursor()

# cursor.execute("""DROP TABLE users""")
# cursor.execute("""CREATE TABLE IF NOT EXISTS users(
#     name text,
#     cell_number text,
#     id int
# )""")

# cursor.execute("""CREATE TABLE IF NOT EXISTS geo(
#     id int,
#     address text,
#     longtitude real,
#     latitude real
# )""")

cursor.execute("""INSERT INTO users ("name", "cell_number", "id")
VALUES ('John', '+1 (860) 123-2345', 364)
""")

con.commit()

cursor.execute("""SELECT * FROM users""")
print(cursor.fetchall())

# No issue just head doesnt print all
# df = pd.read_sql_query("SELECT * FROM users", con)
# print(df.head())

cursor.close()
con.close()
