export interface DropdownOptions {
    label: string,
    value: any
};

export interface BurgerMenuItem {
    label: string;
    route?: string;
    children?: BurgerSubMenuItem[];
}

export interface BurgerSubMenuItem {
    label: string,
    value?: any,
    route?: string;
    children?: BurgerSubMenuItem[]
}