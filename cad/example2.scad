// Parameters
base_width = 100;
base_length = 150;
base_height = 10;
hole_diameter = 5;
hole_spacing = 20;
cutout_width = 30;
cutout_height = 10;
cutout_depth = 5;

// Main function to create the part
module mechanical_part() {
    // Create the base
    base();
    
    // Add holes to the base
    for (x = [hole_spacing : hole_spacing : base_width - hole_spacing]) {
        for (y = [hole_spacing : hole_spacing : base_length - hole_spacing]) {
            translate([x, y, base_height/2])
                hole(hole_diameter);
        }
    }

    // Add a cutout to the base
    translate([base_width/2 - cutout_width/2, base_length/2 - cutout_height/2, 0])
        cutout(cutout_width, cutout_height, cutout_depth);
}

// Function to create the base
module base() {
    cube([base_width, base_length, base_height]);
}

// Function to create a hole
module hole(diameter) {
    cylinder(h = base_height, d = diameter, $fn=100);
}

// Function to create a cutout
module cutout(width, height, depth) {
    translate([0, 0, -1]) // Slightly lower the cutout to ensure it cuts through the base
        cube([width, height, depth + 2]);
}

// Render the mechanical part
mechanical_part();