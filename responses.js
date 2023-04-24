function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "commands") {
        return "Keywords/Commands: <br/><br/> menu - it will show our menu. <br/> about - it will show the 'about us'. <br/> contact us - it will show 'contact info'. <br/> commands - it will show 'keyword'. <br/> ";
    } else if (input == "menu") {
       return "Here's our menu: <br /><br /> Coffee Beans - Arabica Medium Roast - ₱265.00 <br /> Coffee Beans - Barako Medium Roast - ₱235.00 <br />  Coffee Beans - Benguet Blend - ₱235.00 <br /> Coffee Beans - Daily Ritual 500g - ₱562.50 <br />  Coffee Beans - Espresso Blend  - ₱265.00 <br /> Coffee Beans - Yirgacheffe Misty Valley  - ₱950.00  Coffee Beans - Espresso Blend  - ₱265.00 <br /> Coffee Beans - Excelsa Cordillera  - ₱285.00 <br /> Coffee Beans - Gesha Village Lot 85  - ₱665.00 <br /> Coffee Beans - Excelsa Cordillera  - ₱285.00 <br /> Coffee Beans - Gesha Village Lot 85  - ₱665.00 <br /> Coffee Beans - Got Milk? 500g  - ₱775.00 <br /> Coffee Beans - House Blend Dark Roast - ₱265.00 <br /> Coffee Beans - In Love with Flavors - ₱280.00 <br /> Coffee Beans - Kabuhayan Blend 250g - ₱285.00 <br /> Brewing Equipments - 1000pc Cup Coffee Filter - ₱549.00 <br /> Brewing Equipments - White Porcelain Creamer - ₱1,129.00 <br /> Brewing Equipments - Plastic Sugar Pourer - ₱129.00 <br /> Brewing Equipments - Rolled Edged Espresso Cup - ₱ 569.50";
    } else if (input == "about") {
        return "Hi there! <br /><br /> KapeTann Brewed Coffee is a coffee shop and retailer in Zambales, Philippines.";
    } else if (input == "contact") {
        return "Here's our contact information: <br /><br /> Email: abfiguerrez18@gmail.com <br /> Phone Number: 0917 134 1422 <br /> Messenger: @kapetanncoffee <br /> Address: Laoag, San Marcelino, Zambales ";
     } else if (input == "location") {
        return "Here's our address: <strong>San Marcelino, Zambales 2207 Olongapo, Philippines</strong>";
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
