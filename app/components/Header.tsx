type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="p-4 bg-blue-500 text-white text-xl">
      {title}
    </header>
  );
}
