import type {  FC, ReactNode } from "react";

interface IListItem {
  content: ReactNode ;
  href: string;
  className?: string;
  linkClassName?: string;
}

interface IListProps {
  items: IListItem[];
  className?: string;
  itemClassName?: string;
}

export const List: FC<IListProps> = ({ items, className, itemClassName }) => {
  return (
    <>
      <ul className={className || undefined}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${itemClassName} ${item.className || ""}`.trim()}
          >
            <a href={item.href} className={item.linkClassName}>
                {item.content}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
