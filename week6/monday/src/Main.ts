import { Menu } from './Menu';
export class Main {
  async start() {
    const menu = new Menu();
    menu.fillMainMenu();
    menu.fillOptions();
    menu.fillSubMenus();
    await menu.showMainMenu();
  }
}