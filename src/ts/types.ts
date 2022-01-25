export type FunctionPipe = (measure: number) => any;

export type MeasurePipe = 'px' | 'em' | '%' | FunctionPipe; 