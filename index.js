document.addEventListener("DOMContentLoaded", function(){  
    var imageArray = [
        "https://amazon.clikpic.com/RobertHarvey/images/Super_Blue_Moon_Salthrop_Wiltshire_1.jpg",    
        "https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg",
        "https://cdn.shopify.com/s/files/1/0886/8294/files/Spectacular_Panther_Creek_Falls_-_1530_1600x.jpg?v=1541195479",
        "https://www.markhamblin.com/graphics/siteimages/home-slideshow-4.jpg",
        "https://www.rwongphoto.com/images/xl/RW8461.jpg",
        "https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg" 
    ];
    //var imageArray = ["./folder/file1.jpg", "./folder/file2.jpg"]
    var imageArrayIndex = 0;
    var leftButton = document.querySelector("#leftButton");
    var rightButton = document.querySelector("#rightButton");
    var imageHolder = document.getElementById("imageHolder");
    //src = imageArray[0]
    imageHolder.src = imageArray[imageArrayIndex];
    rightButton.addEventListener('click', function(){
        if(imageArrayIndex < imageArray.length - 1){
            imageArrayIndex++; //increment 0 to 1
            imageHolder.src = imageArray[imageArrayIndex]; // src = imageArray[1]
        }
        else{
            console.log("Out of Bounds on right button!")
        }
    })
    leftButton.addEventListener('click', function(){
        if(imageArrayIndex > 0){
            imageArrayIndex--; //increment 1 to 0
            imageHolder.src = imageArray[imageArrayIndex]; // src = imageArray[0]
        }
        else{
            console.log("Out of Bounds on left button!")
        }
    })
})