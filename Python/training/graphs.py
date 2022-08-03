import numpy as np
import matplotlib.pyplot as plt
from IPython.display import display,HTML

product_category = np.array(['Furniture', 'Technology', 'Office Supplies'])
sales = np.array([4110451.90, 4744557.50, 3787492.52] )

plt.bar(product_category, sales,color='green')
(plt.show())
plt.show()