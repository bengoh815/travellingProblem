import pandas as pd
import matplotlib.pyplot as plt

def plotGraph(coords):
    df = pd.DataFrame(data=coords, columns=['name', 'x', 'y'])
    ax = df.plot.scatter(x='x', y='y')
    ax.set_aspect('equal')
    plt.show()


