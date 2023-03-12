import sqlite3
import pandas as pd

con = sqlite3.connect("mainDB.db")
cursor = con.cursor()
# cursor.execute("""SHOW TABLE""")
cursor.execute("""CREATE TABLE IF NOT EXISTS users(
    name text,
    cell_number text,
    id int
)""")

# cursor.execute("""CREATE TABLE IF NOT EXISTS geo(
#     id int,
#     address text,
#     longtitude real,
#     latitude real
# )""")

df = pd.read_sql_query("SELECT * FROM users", con)
print(df.head())

