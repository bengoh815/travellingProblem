import csv


def main():
    with open("./datapoints.csv", ) as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            print(', '.join(row))
    print("hey")


if __name__ == '__main__':
  main()