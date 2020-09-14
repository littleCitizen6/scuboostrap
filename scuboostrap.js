// var allType = [{id:0, name:"הכל"}];
// var allInstruments = [
//     {
//         description:"חצוצרה ארוכה",
//         id:1,
//         imagePath:"images/trumpet.jpg",
//         name:"חצוצרה",
//         price:1500,
//         instrumentType:{id:1, name:"נשיפה"},
//         typeId:1
//     },
//     {
//         description:"מפוחית יפה",
//         id:2,
//         imagePath:"images/harmonica.jpg",
//         name:"מפוחית",
//         price:35,
//         instrumentType:{id:1, name:"נשיפה"},
//         typeId:1
//     },
//     {
//         description:"חליל יפה",
//         id:3,
//         imagePath:"images/flute.jpg",
//         name:"חליל",
//         price:50,
//         instrumentType:{id:1, name:"נשיפה"},
//         typeId:1
//     },
//     {
//         description:"כינור קטן",
//         id:4,
//         imagePath:"images/flute.jpg",
//         name:"כינור2",
//         price:2300,
//         instrumentType:{id:2, name:"מיתר"},
//         typeId:2
//     },
//     {
//         description:"קלרינט רועש",
//         id:5,
//         imagePath:"images/clarinet.jpg",
//         name:"קלרינט",
//         price:1400,
//         instrumentType:{id:1, name:"נשיפה"},
//         typeId:1
//     },
//     {
//         description:"טרומבון קטן",
//         id:6,
//         imagePath:"images/trombone.jpg",
//         name:"טרומבון",
//         price:2400,
//         instrumentType:{id:1, name:"נשיפה"},
//         typeId:1
//     }];
//
//
// function getAddButton() {
//     var icon = document.createElement("img");
//     icon.src="images/shopping-cart-png.jpg";
//     var description = document.createElement("span");
//     description.innerText = "הוספה לעגלה";
//     var addButton = document.createElement("button");
//     addButton.className = "add";
//     addButton.appendChild(icon);
//     addButton.appendChild(description);
//     return addButton;
// }
//
// function insertInstrument(instrument){
//     addTypeIfMiss(instrument.instrumentType);
//     var img = document.createElement("img");
//     img.src = instrument.imagePath;
//     img.className = "img-fluid";
//     var detail = document.createElement("div");
//     detail.className = "product-detail";
//     var primaryTitle = document.createElement("span");
//     primaryTitle.innerText = instrument.name;
//     primaryTitle.className = "primary-title";
//     var secondaryTitle = document.createElement("span");
//     secondaryTitle.innerText = instrument.description;
//     secondaryTitle.className = "secondary-title";
//     var price = document.createElement("span");
//     price.innerText = instrument.price + "₪";
//     price.className = "price";
//     var addButton = getAddButton();
//     detail.appendChild(primaryTitle);
//     detail.appendChild(secondaryTitle);
//     detail.appendChild(price);
//     detail.appendChild(addButton);
//     var product = document.createElement("div");
//     product.className = "col-md-3 product";
//     product.id = instrument.id;
//     product.appendChild(img);
//     product.appendChild(detail);
//     var raws = document.getElementsByClassName("products-row");
//     raws[0].appendChild(product);
// }
//
// function insertInstruments(instruments){
//     instruments.forEach(instrument => insertInstrument(instrument));
// }
//
// function start() {
//     insertInstruments(allInstruments);
//     insertInstrumentTypes(allType);
// }
//
// function insertTypeOption(type) {
//     //console.log("insert type:" + type.name);
//     var options = document.getElementsByClassName("dropdown-menu")[0];
//     var option = document.createElement("a");
//     option.className= "dropdown-item";
//     option.href = "#";
//     option.id = type.id;
//     option.innerText = type.name;
//     option.onclick = function() {selectType(this)};
//     options.appendChild(option);
// }
//
// function insertInstrumentTypes(types) {
//     console.log(types);
//     clearElementChilds("dropdown-menu");
//     types.forEach(type => insertTypeOption(type));
// }
//
//
// function addTypeIfMiss(instrumentType){
//     if (allType.filter(t => t.id === instrumentType.id).length === 0) {
//         allType.push(instrumentType);
//     }
// }
// function clearElementChilds(className){
//     var childs = document.getElementsByClassName(className)[0].childNodes;
//     var childCounts = document.getElementsByClassName(className)[0].childNodes.length;
//     for (var i=childCounts -1 ; i>-1;i--){
//         childs[i].remove();
//     }
//     console.log(document.getElementsByClassName(className)[0]);
// }
// function getByType(type){
//     var type = allType.filter(type => type.name === type.name)[0];
//     clearElementChilds("products-row");
//     if(type.id !==0){
//         return allInstruments.filter(product => product.typeId === type.id);
//     }
//     return allInstruments;
// }
// function selectType(type)
// {
//     var a = document.createElement("a");
//     a.className = type.className + " selected";
//     a.id = type.id;
//     a.innerText = type.innerText;
//     a.href = type.href;
//     console.log(a);
//     var d = allType.filter(t => t.id!=type.id);
//     insertInstrumentTypes(d);
//     console.log(document.getElementsByClassName("dropdown-item"))
//     insertTypeOption(a);
//     console.log(document.getElementsByClassName("dropdown-item"))
//     updateProducts();
// }
// function getByNameInclude(str){
//     clearElementChilds("products-row");
//     return allInstruments.filter(product => product.name.includes(str));
// }
// function updateProducts(){
//     var items =document.getElementsByClassName("dropdown-item");
//     for (var i = 0; i<items.length;i++){
//         if(items[i].className.includes("selected")){
//             var type = items[i];
//             console.log(items[i])
//             break;
//         }
//     }
//     var byType = getByType(type);
//     var byNameInclude = getByNameInclude(document.getElementsByClassName("search-bar search-filter")[0].value);
//     insertInstruments(byType.filter(pro => byNameInclude.includes(pro)));
// }



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
    option.onclick = function() {getByType(this.innerText)};
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
function getByType(typeName){
    var type = allType.filter(type => type.name === typeName)[0];
    clearProducts();
    if(type.id !==0){
        insertInstruments(allInstruments.filter(product => product.typeId === type.id));
    }
    else {
        insertInstruments(allInstruments);
    }
}
function getByNameInclude(str){
    clearProducts();
    insertInstruments(allInstruments.filter(product => product.name.includes(str)));
}

function getCheckedPriceRange() {
    var d =[];
    var boxes = document.getElementsByClassName("form-check-input");
    for (var i = 0 ; i<boxes.length; i++){
        if (boxes[i].checked) {
            d.push(boxes[i]);
        }
    }
    return d;
}

function getByPrice() {
    clearProducts();
    getCheckedPriceRange().forEach(box => insertInstruments(allInstruments.filter(pro => match(pro.price, box))));
}

function match(price, checkbox){
    if (checkbox.max !== 0) {
        return checkbox.min <= price && checkbox.max > price;
    }
    else {
        return checkbox.min <= price
    }
}