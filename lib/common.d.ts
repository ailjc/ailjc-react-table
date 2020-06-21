export interface StandardProps {
  classPrefix?: string;

  className?: string;

  style?: React.CSSProperties;

  [key: string]: any;
}

export type SortType = 'desc' | 'asc';
export interface RowDataType {
  dataKey: string;
  [key: string]: any;
}
