export interface DropdownOptions {
    label: string,
    value: any
};

export interface BurgerMenuItem {
    label: string;
    type?: 'link' | 'dropdown';
    action?: () => void;
    children?: BurgerMenuItem[];
}
