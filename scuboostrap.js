function getAddButton() {
    var icon = document.createElement("img");
    icon.src="images/shopping-cart-png.jpg";
    var description = document.createElement("span");
    description.innerText = "הוספה לעגלה";
    var addButton = document.createElement("button");
    addButton.className = "add";
    addButton.appendChild(icon);
    addButton.appendChild(description);
    return addButton;
}

function insertInstrument(instrument){
    var img = document.createElement("img");
    img.src = instrument.imagePath;
    img.className = "img-fluid";
    var detail = document.createElement("div");
    detail.className = "product-detail";
    var primaryTitle = document.createElement("span");
    primaryTitle.innerText = instrument.name;
    primaryTitle.className = "primary-title";
    var secondaryTitle = document.createElement("span");
    secondaryTitle.innerText = instrument.description;
    secondaryTitle.className = "secondary-title";
    var price = document.createElement("span");
    price.innerText = instrument.price + "₪";
    price.className = "price";
    var addButton = getAddButton();
    detail.appendChild(primaryTitle);
    detail.appendChild(secondaryTitle);
    detail.appendChild(price);
    detail.appendChild(addButton);
    var product = document.createElement("div");
    product.className = "col-md-3 product";
    product.id = instrument.id;
    product.appendChild(img);
    product.appendChild(detail);
    var raws = document.getElementsByClassName("products-row");
    raws[0].appendChild(product);
}

function insertInstruments(instruments){
    instruments.forEach(instrument => insertInstrument(instrument));
}

function start() {
    var instrument1 = {
        description:"חצוצרה ארוכה",
        id:1,
        imagePath:"images/trumpet.jpg",
        name:"חצוצרה",
        price:1500
    }
    var instrument2 = {
        description:"מפוחית יפה",
        id:2,
        imagePath:"images/harmonica.jpg",
        name:"מפוחית",
        price:35
    }
    var instrument3 = {
        description:"חליל יפה",
        id:3,
        imagePath:"images/flute.jpg",
        name:"חליל",
        price:50
    }
    var instrument4 = {
        description:"כינור קטן",
        id:4,
        imagePath:"images/flute.jpg",
        name:"כינור2",
        price:2300
    }
    var instrument5 = {
        description:"קלרינט רועש",
        id:5,
        imagePath:"images/clarinet.jpg",
        name:"קלרינט",
        price:1400
    }
    var instrument6 = {
        description:"טרומבון קטן",
        id:6,
        imagePath:"images/trombone.jpg",
        name:"טרומבון",
        price:2400
    }
    var instruments = [instrument1, instrument2,instrument3,instrument4, instrument5, instrument6];
    insertInstruments(instruments);
}