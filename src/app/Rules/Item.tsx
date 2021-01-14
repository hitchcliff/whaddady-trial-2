import { Number } from '../../components/Heading';

interface ItemProps {
  str: string;
  className?: string;
  children: any;
}

export default function Item({ str, className, children }: ItemProps) {
  return (
    <div className={className}>
      <Number number={str}>{children}</Number>
    </div>
  );
}
