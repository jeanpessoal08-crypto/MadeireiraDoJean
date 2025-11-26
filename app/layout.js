import Menu from "../componentes/menu";

export const metadata = {
  title: 'Madeireira J',
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
          <p>© Madeireira J - {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}