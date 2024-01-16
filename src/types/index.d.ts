type WithChildren<T = Record> = T & {
  /** 插槽组件 */
  children?: React.ReactNode;
};
