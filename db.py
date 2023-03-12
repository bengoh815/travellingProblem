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

cursor.execute("""INSERT INTO users ("name", "cell_number", "id")
VALUES ('John Doe', '+1 (608) 123-9823', 1)
""")

df = pd.read_sql_query("SELECT * FROM users", con)
print(df.head())

