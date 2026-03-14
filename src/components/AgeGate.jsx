export default function AgeGate({ onConfirm }) {
  function handleReject() {
    window.location.href = 'https://www.google.com';
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-card max-w-md w-full rounded-3xl p-10 flex flex-col items-center gap-4 animate-fade-in">
        {/* Logo */}
        <h1 className="font-[family-name:var(--font-serif)] text-4xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
          THIMOTINA
        </h1>

        {/* Question */}
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-center text-[var(--color-text)]">
          Você possui mais de 18 anos?
        </h2>

        {/* Subtext */}
        <p className="text-sm text-[var(--color-text-muted)] text-center">
          Este site contém informações sobre bebidas alcoólicas e é destinado a maiores de 18 anos.
        </p>

        {/* Confirm Button */}
        <button
          onClick={onConfirm}
          className="w-full py-3 rounded-full bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold cursor-pointer hover:bg-[var(--color-primary-light)] transition-colors"
        >
          Sim, tenho 18 anos ou mais
        </button>

        {/* Reject Button */}
        <button
          onClick={handleReject}
          className="w-full py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] cursor-pointer hover:border-[var(--color-primary)] transition-colors"
        >
          Não, sou menor de idade
        </button>

        {/* Disclaimer */}
        <p className="text-xs text-[var(--color-text-subtle)]">
          Beba com moderação.
        </p>
      </div>
    </div>
  );
}
