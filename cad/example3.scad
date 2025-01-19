// Parameters for the piston
piston_diameter = 80;
piston_height = 120;
piston_pin_diameter = 20;
piston_pin_length = 60;
piston_ring_groove_depth = 2;
piston_ring_groove_width = 4;
num_piston_rings = 3;
piston_head_dome_height = 10;
connecting_rod_hole_diameter = 40;
skirt_height = 30;
skirt_thickness = 5;

// Main piston module
module piston() {
    // Create the main body of the piston
    difference() {
        cylinder(d = piston_diameter, h = piston_height, $fn=100);
        // Create the piston pin hole
        translate([0, 0, piston_height/2 - piston_pin_diameter/2])
            rotate([90, 0, 0])
                cylinder(d = piston_pin_diameter, h = piston_pin_length + 2, $fn=100);
    }
    
    // Create the piston head dome
    translate([0, 0, piston_height])
        cylinder(d1 = 0, d2 = piston_diameter, h = piston_head_dome_height, $fn=100);
    
    // Create the connecting rod hole
    difference() {
        translate([0, 0, piston_height / 4])
            cylinder(d = connecting_rod_hole_diameter, h = piston_height / 2, $fn=100);
        // Create the inner hole for the connecting rod
        translate([0, 0, piston_height / 4])
            cylinder(d = piston_pin_diameter, h = piston_height / 2 + 2, $fn=100);
    }
    
    // Create the piston skirt
    translate([0, 0, -skirt_height])
        cylinder(d = piston_diameter, h = skirt_height, $fn=100);
    
    // Create the piston ring grooves
    for (i = [0: num_piston_rings - 1]) {
        translate([0, 0, piston_height - (i + 1) * (piston_ring_groove_width + piston_ring_groove_depth)])
            difference() {
                cylinder(d = piston_diameter, h = piston_ring_groove_depth, $fn=100);
                translate([0, 0, -0.01])
                    cylinder(d = piston_diameter - 2 * piston_ring_groove_width, h = piston_ring_groove_depth + 0.02, $fn=100);
            }
    }
}

// Generate top view
module top_view() {
    projection(cut = true) {
        piston();
    }
}

// Generate front view
module front_view() {
    rotate([90, 0, 0]) {
        projection(cut = true) {
            piston();
        }
    }
}

// Generate side view
module side_view() {
    rotate([0, 90, 0]) {
        projection(cut = true) {
            piston();
        }
    }
}

// Render the views
translate([-150, 0, 0]) {
    top_view();
}

translate([0, 0, 0]) {
    front_view();
}

translate([150, 0, 0]) {
    side_view();
}