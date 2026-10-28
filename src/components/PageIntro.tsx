type Props = {
  eyebrow: string;
  title: string;
  lede: string;
};

export function PageIntro({ eyebrow, title, lede }: Props) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
    </header>
  );
}
