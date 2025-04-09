import Link from "next/link";

export function Menu() {
  return (
    <nav>
      <ul>
        <Link href="/quemsomos"><li>Quem somos</li></Link>
        <Link href="/socios"><li>Sócios</li></Link>
        <Link href="/especialidades"><li>Áreas de especialidade</li></Link>
        <Link href="/contato"><li>Contato</li></Link>
      </ul>
    </nav>
  );
}
