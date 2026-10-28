type Props = {
  children: React.ReactNode;
  by?: string;
};

export function HandNote({ children, by }: Props) {
  return (
    <blockquote className="note">
      <p>
        <span className="flame" aria-hidden="true" />
        <span>{children}</span>
      </p>
      {by ? <footer>{by}</footer> : null}
    </blockquote>
  );
}
