var allType = [{id:0, name:"הכל"}];
var allInstruments = [
    {
        description:"חצוצרה ארוכה",
        id:1,
        imagePath:"images/trumpet.jpg",
        name:"חצוצרה",
        price:1500,
        instrumentType:{id:1, name:"נשיפה"},
        typeId:1
    },
    {
        description:"מפוחית יפה",
        id:2,
        imagePath:"images/harmonica.jpg",
        name:"מפוחית",
        price:35,
        instrumentType:{id:1, name:"נשיפה"},
        typeId:1
    },
    {
        description:"חליל יפה",
        id:3,
        imagePath:"images/flute.jpg",
        name:"חליל",
        price:50,
        instrumentType:{id:1, name:"נשיפה"},
        typeId:1
    },
    {
        description:"כינור קטן",
        id:4,
        imagePath:"images/flute.jpg",
        name:"כינור2",
        price:2300,
        instrumentType:{id:2, name:"מיתר"},
        typeId:2
    },
    {
        description:"קלרינט רועש",
        id:5,
        imagePath:"images/clarinet.jpg",
        name:"קלרינט",
        price:1400,
        instrumentType:{id:1, name:"נשיפה"},
        typeId:1
    },
    {
        description:"טרומבון קטן",
        id:6,
        imagePath:"images/trombone.jpg",
        name:"טרומבון",
        price:2400,
        instrumentType:{id:1, name:"נשיפה"},
        typeId:1
    }];


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
    addTypeIfMiss(instrument.instrumentType);
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
    insertInstruments(allInstruments);
    insertInstrumentTypes(allType);
}

function getTypeOption(type) {
    var option = document.createElement("a");
    option.className= "dropdown-item";
    option.href = "#";
    option.innerText = type.name;
    option.onclick = function() {GetByType(this.innerText)};
    return option;
}

function insertInstrumentTypes(types)
{
    var options = document.createElement("div");
    options.className = "dropdown-menu";
    options.setAttribute("aria-labelledby","dropdownMenuButton");
    types.forEach(type =>options.appendChild(getTypeOption(type)));
    var dropdownMenu = document.getElementsByClassName("dropdown search-filter");
    dropdownMenu[0].appendChild(options);
}

function addTypeIfMiss(instrumentType){
    if (allType.filter(t => t.id === instrumentType.id).length === 0) {
        allType.push(instrumentType);
    }
}
function clearProducts(){
    var childs = document.getElementsByClassName("products-row")[0].children;
    var childCounts = document.getElementsByClassName("products-row")[0].children.length;
    for (var i=childCounts -1 ; i>-1;i--){
        childs[i].remove();
    }
}
function GetByType(typeName){
    var type = allType.filter(type => type.name === typeName)[0];
    clearProducts();
    if(type.id !==0){
        insertInstruments(allInstruments.filter(product => product.typeId === type.id));
    }
    else {
        insertInstruments(allInstruments);
    }
}

