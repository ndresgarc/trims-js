import { DisplayPipe } from '../ts/types';

export const _fn_show = function (pipe?: DisplayPipe) {
    if (!pipe) {
        this.style.display = 'block';
        return;
    }
    this.style.display = pipe;
}