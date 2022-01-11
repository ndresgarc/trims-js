var _fn_show = function (pipe) {
    if (!pipe) {
        this.style.display = 'block';
        return;
    }
    this.style.display = pipe;
}

export default _fn_show;