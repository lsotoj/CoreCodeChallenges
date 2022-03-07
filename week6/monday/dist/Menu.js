"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const MenuElement_1 = require("./MenuElement");
const Input_1 = require("./Input");
class Menu {
    constructor() {
        this.mainMenu = [];
        this.soupMenu = [];
        this.chefSpecialsMenu = [];
        this.chickenMenu = [];
        this.beefMenu = [];
        this.beveragesMenu = [];
        this.soupOptions = [];
        this.chefSpecialsOptions = [];
        this.chickenOptions = [];
        this.beefOptions = [];
        this.beveragesOptions = [];
    }
    fillMainMenu() {
        this.mainMenu.push({ option: 1, message: "Soup" });
        this.mainMenu.push({ option: 2, message: "Chef's Specials" });
        this.mainMenu.push({ option: 3, message: "Chicken" });
        this.mainMenu.push({ option: 4, message: "Beef" });
        this.mainMenu.push({ option: 5, message: "Beverages" });
        this.mainMenu.push({ option: 6, message: "Exit" });
    }
    fillOptions() {
        this.soupOptions.push(new MenuElement_1.MenuElement("Wonton Soup", 2.25, "🍗"));
        this.soupOptions.push(new MenuElement_1.MenuElement("Chicken Corn Soup", 1.95, "🌽"));
        this.soupOptions.push(new MenuElement_1.MenuElement("Vegetable Corn Soup", 2.95, "🥕"));
        this.chefSpecialsOptions.push(new MenuElement_1.MenuElement("Orange Beef", 8.95, "🐄"));
        this.chefSpecialsOptions.push(new MenuElement_1.MenuElement("Kung Pao Shrimp", 8.50, "🦐"));
        this.chickenOptions.push(new MenuElement_1.MenuElement("Lemon Chicken", 9.95, "🐔"));
        this.chickenOptions.push(new MenuElement_1.MenuElement("Sesame Chicken", 9.95, "🐣"));
        this.chickenOptions.push(new MenuElement_1.MenuElement("Hunan Chicken", 10.50, "🥦"));
        this.beefOptions.push(new MenuElement_1.MenuElement("Pepper Steak", 9.95, "🥩"));
        this.beefOptions.push(new MenuElement_1.MenuElement("Manchurian Beef", 11.95, "🍔"));
        this.beveragesOptions.push(new MenuElement_1.MenuElement("Piña Colada", 3.00, "🍍"));
        this.beveragesOptions.push(new MenuElement_1.MenuElement("Spanish Coffee", 5.50, "☕"));
    }
    fillSubMenus() {
        this.soupOptions.forEach((element) => {
            this.soupMenu.push({ name: element.id, message: element.printOption() });
        });
        this.chefSpecialsOptions.forEach((element) => {
            this.chefSpecialsMenu.push({ name: element.id, message: element.printOption() });
        });
        this.chickenOptions.forEach((element) => {
            this.chickenMenu.push({ name: element.id, message: element.printOption() });
        });
        this.beefOptions.forEach((element) => {
            this.beefMenu.push({ name: element.id, message: element.printOption() });
        });
        this.beveragesOptions.forEach((element) => {
            this.beveragesMenu.push({ name: element.id, message: element.printOption() });
        });
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelect("Seleccione un Menu", this.mainMenu);
            while (input.data !== 6) {
                switch (input.data) {
                    case 1:
                        yield this.showSubMenuOption("Seleccione su Sopa", this.soupMenu, this.soupOptions);
                        break;
                    case 2:
                        yield this.showSubMenuOption("Seleccione su Especialidad", this.chefSpecialsMenu, this.chefSpecialsOptions);
                        break;
                    case 3:
                        yield this.showSubMenuOption("Seleccione su Pollo", this.chickenMenu, this.chickenOptions);
                        break;
                    case 4:
                        yield this.showSubMenuOption("Seleccione su Corte", this.beefMenu, this.beefOptions);
                        break;
                    case 5:
                        yield this.showSubMenuOption("Selecciona tu Bebida", this.beveragesMenu, this.beveragesOptions);
                        break;
                }
                input = yield Input_1.Input.getSelect("Seleccione un Menu", this.mainMenu);
            }
            console.log(`
                    =============================
                    =============================
                    === Enjoy your meal "🙋‍♂️" ===
                    =============================
                    =============================
                `);
        });
    }
    showSubMenuOption(message, subMenu, subMenuOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelectById(message, subMenu);
            let elemento = subMenuOptions.find((mElement) => mElement.id === input.data);
            console.log(`
        Here is your ${elemento === null || elemento === void 0 ? void 0 : elemento.emoji} at a $${elemento === null || elemento === void 0 ? void 0 : elemento.price} cost
        `);
        });
    }
}
exports.Menu = Menu;
