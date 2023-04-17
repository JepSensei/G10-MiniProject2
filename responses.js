function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "commands") {
        return "Keywords/Commands: <br/><br/> menu - it will show our menu. <br/> about - it will show the 'about us'. <br/> contact us - it will show 'contact info'. <br/> commands - it will show 'keyword'. <br/> how to order - it will show the instruction.";
    } else if (input == "menu") {
       return "Here's our menu: <br /><br /> Coffee Beans - Arabica Medium Roast - ₱265.00 <br /> Coffee Beans - Barako Medium Roast - ₱235.00 <br />  Coffee Beans - Benguet Blend - ₱235.00 <br /> Coffee Beans - Daily Ritual 500g - ₱562.50 <br />  Coffee Beans - Espresso Blend  - ₱265.00 <br /> Coffee Beans - Yirgacheffe Misty Valley  - ₱950.00  Coffee Beans - Espresso Blend  - ₱265.00 <br /> Coffee Beans - Excelsa Cordillera  - ₱285.00 <br /> Coffee Beans - Gesha Village Lot 85  - ₱665.00 <br /> Coffee Beans - Excelsa Cordillera  - ₱285.00 <br /> Coffee Beans - Gesha Village Lot 85  - ₱665.00 <br /> Coffee Beans - Got Milk? 500g  - ₱775.00 <br /> Coffee Beans - House Blend Dark Roast - ₱265.00 <br /> Coffee Beans - In Love with Flavors - ₱280.00 <br /> Coffee Beans - Kabuhayan Blend 250g - ₱285.00 <br /> Brewing Equipments - 1000pc Cup Coffee Filter - ₱549.00 <br /> Brewing Equipments - White Porcelain Creamer - ₱1,129.00 <br /> Brewing Equipments - Plastic Sugar Pourer - ₱129.00 <br /> Brewing Equipments - Rolled Edged Espresso Cup - ₱ 569.50 <br /> Brewing Equipments - RollEspresso Grinder 120v - ₱ 3,219.00 <br /> Brewing Equipments - Digital Control Scale 120v - ₱  1,799.00 <br /> Brewing Equipments - Plastic Measuring Cup ₱ 255.00 <br /> Brewing Equipments -Espresso Knock Box
- ₱ 459.00  <br /> Brewing Equipments -Stainless Frothing Pitcher - ₱ 399.00 <br /> Brewing Equipments - Stainless Espresso Stamper - ₱ 998.00 <br /> Brewing Equipments - 500pc Paper Hot Cup - ₱ 2500.00 <br /> Brewing Equipments - Tea Ball Infuser with Chain - ₱ 129.00";
    } else if (input == "about") {
        return "Hi there! <br /><br /> KapeTann Brewed Coffee is a coffee shop and retailer in Zambales, Philippines.";
    } else if (input == "contact us") {
        return "Here's our contact information: <br /><br /> Email: abfiguerrez18@gmail.com <br /> Phone Number: 0917 134 1422 <br /> Messenger: @kapetanncoffee <br /> Address: Laoag, San Marcelino, Zambales ";
    } else if (input == "how to order") {
        return "Hi There! <br /><br /> To order, you can go to our Menu section and click the 'Add to Cart' button of your choice. <br /><br /> I hope you understand. Thank you so much!";
    
    /*
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    */
   
    } else {
        return "Try asking something else!";
    }
}
