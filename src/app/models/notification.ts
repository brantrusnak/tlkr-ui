export interface Notification {
    type: 'inline' | 'global';
    style: 'success' | 'danger' | 'warning' | 'info';
    message: any;
}