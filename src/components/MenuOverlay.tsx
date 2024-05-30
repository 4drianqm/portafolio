import NavLink from "@/components/NavLink";

type Link = {
  title: string;
  path: string;
};

type Props = {
  links: Link[];
};

export default function MenuOverlay({ links }: Props) {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index} className="flex flex-col items-center">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
