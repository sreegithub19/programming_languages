module Abacus(Scl = [1,1,1]){   // Scl -> Scale of Object

    module abacus_sphere(){

        color("#A1662F"){
        translate([0,0,8])
        cylinder(18,0.3,0.3, center = true);
        }

        color("#281c14")
        
        for (i = [-0.3:1.3:13.7]){
            translate([0,0,i])
            scale([1,1,0.7])
            sphere(r = 1, $fn=20);
        }
    }
         
    scale(Scl){  
    
    for (i = [-0:2.3:21]){
        translate([0,i,0])
        abacus_sphere();
    }
  
    // Create Wood Structure    
    color("#A1662F"){ 
        translate([-0.5,-4,17])
        cube([1,28,1]);

        translate([-0.5,-4,-2])
        cube([1,28,1]);
        
        translate([-0.5,24,-2])
        cube([1,1,20]);

        translate([-0.5,-4,-2])
        cube([1,1,20]);
        }
        
    }
}

Abacus(Scl = [0.1,0.1,0.1]);


// Written by Nicolì Angelo (Gengio) 2024: 
// MIT License


//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.