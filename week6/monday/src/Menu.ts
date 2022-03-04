import { MenuElement } from "./MenuElement";
import { Input, SelectChoice, Choice } from './Input';

export class Menu {
    mainMenu: SelectChoice[] = [];
    soupMenu: Choice[] = [];
    chefSpecialsMenu: Choice[] = [];
    chickenMenu: Choice[] = [];
    beefMenu: Choice[] = [];
    beveragesMenu: Choice[] = [];
    soupOptions: MenuElement[] = [];
    chefSpecialsOptions: MenuElement[] = [];
    chickenOptions: MenuElement[] = [];
    beefOptions: MenuElement[] = [];
    beveragesOptions: MenuElement[] = [];
    
    fillMainMenu() {
        this.mainMenu.push({option: 1, message: "Soup"});
        this.mainMenu.push({option: 2, message: "Chef's Specials"});
        this.mainMenu.push({option: 3, message: "Chicken"});
        this.mainMenu.push({option: 4, message: "Beef"});
        this.mainMenu.push({option: 5, message: "Beverages"});
    }

    fillOptions() {
       this.soupMenu.push(
            { name: "Wonton Soup", message: "Wonton Soup" },
            { name: "Chicken Corn Soup", message: "Chicken Corn Soup" },
            { name: "Vegetable Corn Soup", message: "Vegetable Corn Soup" }
       );     
       
       this.chefSpecialsMenu.push(
            { name: "Orange Beef", message: "Orange Beef" },
            { name: "Kung Pao Shrimp", message: "Kung Pao Shrimp" }
       )
    
       this.chickenMenu.push(
            { name: "Lemon Chicken", message: "Lemon Chicken" },
            { name: "Sesame Chicken", message: "Sesame Chicken" },
            { name: "Hunan Chicken", message: "Hunan Chicken" }
       )


    }

    async showMainMenu() {
        let input = await Input.getSelect("Seleccione un Menu", this.mainMenu);
    }


}