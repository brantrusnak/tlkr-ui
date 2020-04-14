export interface DropdownOption {
    label: string;
    callback: (option: DropdownOption) => void;
}