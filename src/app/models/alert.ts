import { Style } from './style';

export interface Alert {
    type: 'inline' | 'global';
    style: Style;
    message: any;
}