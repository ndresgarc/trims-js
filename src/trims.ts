class Trims {

    constructor(mode: string) {
        console.log('Trims loaded');
        console.log(mode);
        this.ahoy();
    }

    ahoy(): void {
        console.table({
            repo: "https://github.com/ndresgarc/trims-js.git",
            version: "0.0.1"
        });
    }

}