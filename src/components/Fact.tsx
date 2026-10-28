type Props = {
  label: string;
  value: string;
  placeholder: string;
};

export function Fact({ label, value, placeholder }: Props) {
  const known = value.trim().length > 0;

  return (
    <div className={known ? "fact" : "fact fact-placeholder"}>
      <div className="fact-head">
        <span className="fact-label">{label}</span>
        {known ? null : <span className="fact-tag">Nog in te vullen</span>}
      </div>
      <p className="fact-value">{known ? value : placeholder}</p>
    </div>
  );
}
