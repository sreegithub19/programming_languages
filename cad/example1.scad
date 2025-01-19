// example.scad
// A complex 3D model combining various shapes and transformations

// Main module
module complex_model() {
    difference() {
        // Base cube
        cube([50, 50, 20], center = true);
        
        // Cylindrical holes
        for (i = [-15, 0, 15]) {
            translate([i, 0, 10]) 
                cylinder(h = 20, r = 5, center = true);
            translate([0, i, 10]) 
                cylinder(h = 20, r = 5, center = true);
        }
        
        // Spherical cut
        translate([0, 0, 10])
            sphere(r = 15);
    }
}

// Call the main module
complex_model();