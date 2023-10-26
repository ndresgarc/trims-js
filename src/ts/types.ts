export type FunctionPipe = (measure: number) => any;

export type MeasurePipe = "px" | "em" | "%" | FunctionPipe;

export type DisplayPipe =
  | "inline"
  | "block"
  | "contents"
  | "flex"
  | "grid"
  | "inline-block"
  | "inline-flex"
  | "inline-grid"
  | "inline-table"
  | "list-item"
  | "run-in"
  | "table"
  | "table-caption"
  | "table-column-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row-group"
  | "table-cell"
  | "table-column"
  | "table-row"
  | "none"
  | "initial"
  | "inherit"
  | FunctionPipe;

export type TrimsScrollEvent =
  | "scroll-up"
  | "scroll-down"
  | "scroll-top"
  | "scroll-bottom";

export type TrimsResizeEvent =
  | "viewport-xs"
  | "viewport-s"
  | "viewport-m"
  | "viewport-l"
  | "viewport-xl"
  | "viewport-xxl";

export type TrimsEvent = TrimsScrollEvent | TrimsResizeEvent;
