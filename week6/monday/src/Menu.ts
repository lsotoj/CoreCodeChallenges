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
        this.mainMenu.push({ option: 1, message: "Soup" });
        this.mainMenu.push({ option: 2, message: "Chef's Specials" });
        this.mainMenu.push({ option: 3, message: "Chicken" });
        this.mainMenu.push({ option: 4, message: "Beef" });
        this.mainMenu.push({ option: 5, message: "Beverages" });
        this.mainMenu.push({ option: 6, message: "Exit" });
    }

    fillOptions() {
        this.soupOptions.push(new MenuElement("Wonton Soup", 2.25, "🍗"));
        this.soupOptions.push(new MenuElement("Chicken Corn Soup", 1.95, "🌽"));
        this.soupOptions.push(new MenuElement("Vegetable Corn Soup", 2.95, "🥕"));

        this.chefSpecialsOptions.push(new MenuElement("Orange Beef", 8.95, "🐄"));
        this.chefSpecialsOptions.push(new MenuElement("Kung Pao Shrimp", 8.50, "🦐"));

        this.chickenOptions.push(new MenuElement("Lemon Chicken", 9.95, "🐔"));
        this.chickenOptions.push(new MenuElement("Sesame Chicken", 9.95, "🐣"));
        this.chickenOptions.push(new MenuElement("Hunan Chicken", 10.50, "🥦"));

        this.beefOptions.push(new MenuElement("Pepper Steak", 9.95, "🥩"));
        this.beefOptions.push(new MenuElement("Manchurian Beef", 11.95, "🍔"));

        this.beveragesOptions.push(new MenuElement("Piña Colada", 3.00, "🍍"));
        this.beveragesOptions.push(new MenuElement("Spanish Coffee", 5.50, "☕"));

    }

    fillSubMenus() {
        this.soupOptions.forEach((element: MenuElement) => {
            this.soupMenu.push({ name: element.id, message: element.printOption() })
        });

        this.chefSpecialsOptions.forEach((element: MenuElement) => {
            this.chefSpecialsMenu.push({ name: element.id, message: element.printOption() });
        });

        this.chickenOptions.forEach((element: MenuElement) => {
            this.chickenMenu.push({ name: element.id, message: element.printOption() });
        });

        this.beefOptions.forEach((element: MenuElement) => {
            this.beefMenu.push({ name: element.id, message: element.printOption() });
        });

        this.beveragesOptions.forEach((element: MenuElement) => {
            this.beveragesMenu.push({ name: element.id, message: element.printOption() });
        });
    }

    async showMainMenu() {
        let input = await Input.getSelect("Seleccione un Menu", this.mainMenu);
        while (input.data !== 6) {
            switch (input.data) {
                case 1:
                    await this.showSubMenuOption("Seleccione su Sopa", this.soupMenu, this.soupOptions);
                    break;
                case 2:
                    await this.showSubMenuOption("Seleccione su Especialidad", this.chefSpecialsMenu, this.chefSpecialsOptions);
                    break;
                case 3:
                    await this.showSubMenuOption("Seleccione su Pollo", this.chickenMenu, this.chickenOptions);
                    break;
                case 4:
                    await this.showSubMenuOption("Seleccione su Corte", this.beefMenu, this.beefOptions);
                    break;
                case 5:
                    await this.showSubMenuOption("Selecciona tu Bebida", this.beveragesMenu, this.beveragesOptions);
                    break;
            }
            input = await Input.getSelect("Seleccione un Menu", this.mainMenu);
        }
        console.log(`
                    =============================
                    =============================
                    === Enjoy your meal "🙋‍♂️" ===
                    =============================
                    =============================
                `);   
    }

    async showSubMenuOption(message: string, subMenu: Choice[], subMenuOptions: MenuElement[]) {
        let input = await Input.getSelectById(message, subMenu);
        let elemento = subMenuOptions.find((mElement: MenuElement) => mElement.id === input.data);
        console.log(`
        Here is your ${elemento?.emoji} at a $${elemento?.price} cost
        `)
    }
}