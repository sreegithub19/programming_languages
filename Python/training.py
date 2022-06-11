# import subprocess
# import sys

# def install(package):
#     subprocess.check_call([sys.executable, "-m", "pip", "install", package])
    
# install("matplotlib")
# print(sys.executable)

# C:\Users\Padmaja\AppData\Local\Programs\Python\Python310\python.exe

import numpy as np
import matplotlib.pyplot as plt

product_category = np.array(['Furniture', 'Technology', 'Office Supplies'])
sales = np.array ([4110451.90, 4744557.50, 3787492.52] )

plt.bar(product_category, sales)
plt.show()