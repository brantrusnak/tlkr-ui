export interface Alert {
    type: 'inline' | 'global';
    style: 'success' | 'danger' | 'warning' | 'info';
    message: any;
}