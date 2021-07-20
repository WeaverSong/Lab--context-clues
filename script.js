var AddElement = function (type, parent, text, properties, eventListeners) {
    var NewElement = document.createElement(type);
    if (text !== undefined) NewElement.textContent = text;

    for (key in properties)
    {
        NewElement[key] = properties[key];
    }
    for (key in eventListeners)
    {
        NewElement.addEventListener(key, eventListeners[key]);
    }

    if (parent) parent.appendChild(NewElement);

    return NewElement;
};

//This would return what the lab is wanting me to do
var ScopingFunction = function (Friend, Weapon, Location) {
    return function () {alert(`I accuse ${Friend}, with ${Weapon}, in the ${Location}!`);};
};
//Alternative solution to scoping
var Accuse = function () {
    var id = parseInt (this.id)
    alert(`I accuse ${Friends[id % 5]}, with ${Weapons[id % 20]}, in the ${Locations[id % 10]}!`);
};

var Friends = ["Naharie", "WingSpan", "RoseWyrm", "Mbletz", "WingedSeal"];
var Weapons = ["Java", "Javascript", "Html", "Css", "C#", "C", "C++", "IBM Cobol", "Typescript", "Ruby", "Python", "PHP", "R", "Assembly", "Perl", "QALB", "TIE", "Unicon", "Xtend", "Zeno"];
var Locations = ["Kitchen", "Hallway", "Dining room", "Study", "Porch", "Bedroom", "Library", "Yard", "Laundry Room", "Washing room"];

for (var i = 1; i < 101; i++)
{
    //The scoping method
    //AddElement('h3', AddElement('div', document.body, '', {}, {}), `Accusation ${i}`, {id: i}, {click: ScopingFunction(Friends[i % 5], Weapons[i % 20], Locations[i % 10])});

    //Alternative method
    AddElement('h3', AddElement('div', document.body, '', {}, {}), `Accusation ${i}`, {id: i}, {click: Accuse});
}