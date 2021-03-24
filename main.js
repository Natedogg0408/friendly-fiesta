canvas = new fabric.Canvas("myCanvas"); 
ctx = canvas.getContext("2d");

hero_img_height = 30; 
hero_img_width = 30; 

hero_x = 10; 
hero_y = 10;

hero_object = ""; 
block_img_object = ""; 

function hero_update(){
   fabric.Image.fromURL("hero.webp", function(Img){
    hero_object = Img; 
    hero_object.scaleToWidth(150);
    hero_object.scaleToWidth(140);
    hero_object.set({
           top:hero_y,
           left:hero_x 

       });
       canvas.add(hero_object);
   });

}

function new_image(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
        bolck_img_object = Img; 
        bolck_img_object.scaleToWidth(block_img_width);
        bolck_img_object.scaleToWidth(block_img_height);
        bolck_img_object.set({
            top:player_y,
            left:player_x 
 
        });
        canvas.add(block_img_object);
    });
}

console.log("I used the block_img_object and the like for certain variables that I wasn't sure what to name since the project overview didn't quite give a complete explanation. Oh and yes, the canvas is actually there. :)");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   