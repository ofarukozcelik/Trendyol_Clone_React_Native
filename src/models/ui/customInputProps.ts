interface CustomInputProps {
  title: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: any) => void;
  secureTextEntry?: boolean;
  status?: 'danger' | 'success';
  caption?: string;
}

export type {CustomInputProps};
