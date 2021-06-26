var meatEater = confirm("Do you eat meat?");

foodType = "nothing"
if (meatEater) {
    foodType = "Here's a cheese burger"
} else {
    foodType = "Here's a veggie burger"
}
alert(foodType)