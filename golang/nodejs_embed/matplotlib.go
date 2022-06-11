// working

package main

import (
	"fmt"
	"os/exec"
)

func main() {
	arg := `python`
	arg1 := `-c`

	arg2 := `
import numpy as np
import matplotlib.pyplot as plt

product_category = np.array(['Furniture', 'Technology', 'Office Supplies'])
sales = np.array ([4110451.90, 4744557.50, 3787492.52] )

plt.bar(product_category, sales)
plt.show()
	`

	cmd := exec.Command(arg, arg1, arg2)
	stdout, err := cmd.Output()

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	// Print the output
	fmt.Println(string(stdout))
}
