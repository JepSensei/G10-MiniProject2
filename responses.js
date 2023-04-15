function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "commands") {
        return "Keywords/Commands: <br/><br/> menu - it will show our menu. <br/> about - it will show the 'about us'. <br/> contact us - it will show 'contact info'. <br/> commands - it will show 'keyword'. <br/> how to order - it will show the instruction.";
    } else if (input == "menu") {
        return "Here's our menu: <br /><br /> Americano - Hot Espresso (12 OZ) - ₱45.00 <br /> Caffe Latte - Steamed Milk (12 OZ) - ₱65.00 <br /> Salted Caramel Espresso (12 OZ) - ₱75.00 <br /> Cafe Mocha Espresso (12 OZ) - ₱75.00 <br /> Spanish Latte Espresso (12 OZ) - ₱75.00 ";
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
