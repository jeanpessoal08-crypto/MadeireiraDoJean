import Menu from "../componentes/menu";

export const metadata = {
  title: 'Madeireira do Jean',
  description: 'Sistema de gestão para Madeireira J',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Menu />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>© Madeireira do Jean - Construindo o futuro com raízes sólidas.{new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}