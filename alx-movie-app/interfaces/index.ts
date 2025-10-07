export interface ReactComponentProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  title: string;
  action?: () => void;
}
