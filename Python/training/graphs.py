# python graphs.py
# or 
# ipython graphs.py

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from IPython.display import display,HTML

product_category = np.array(['Furniture', 'Technology', 'Office Supplies'])
sales = np.array([4110451.90, 4744557.50, 3787492.52] )

plt.bar(product_category, sales,color='green')
plt.show()
plt.show()

cars_per_cap = [809, 731, 588, 18, 200, 70, 45]
country = ['United States', 'Australia', 'Japan', 'India', 'Russia', 'Morocco', 'Egypt']
drives_right = [True, False, False, False, True, True, True]
data = {"cars_per_cap": cars_per_cap, "country": country, "drives_right": drives_right}
display(pd.DataFrame(data))
print(pd.DataFrame(data))

