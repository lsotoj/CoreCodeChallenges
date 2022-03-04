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
    }
    fillOptions() {
        this.soupMenu.push({ name: "Wonton Soup", message: "Wonton Soup" }, { name: "Chicken Corn Soup", message: "Chicken Corn Soup" }, { name: "Vegetable Corn Soup", message: "Vegetable Corn Soup" });
        this.chefSpecialsMenu.push({ name: "Orange Beef", message: "Orange Beef" }, { name: "Kung Pao Shrimp", message: "Kung Pao Shrimp" });
        this.chickenMenu.push({ name: "Lemon Chicken", message: "Lemon Chicken" }, { name: "Sesame Chicken", message: "Sesame Chicken" }, { name: "Hunan Chicken", message: "Hunan Chicken" });
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelect("Seleccione un Menu", this.mainMenu);
        });
    }
}
exports.Menu = Menu;
