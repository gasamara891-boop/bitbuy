import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem; onLinkClick?: () => void }> = ({ 
  item,
  onLinkClick 
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };

  const handleLinkClick = () => {
    // Close navbar when a non-submenu link is clicked
    if (!item.submenu) {
      onLinkClick?.();
    }
  };

  const handleSubmenuLinkClick = () => {
    // Close submenu and navbar when a submenu item is clicked
    setSubmenuOpen(false);
    onLinkClick?.();
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={(e) => {
          if (item.submenu) {
            handleToggle(e as any);
          } else {
            handleLinkClick();
          }
        }}
        className="flex items-center justify-between w-full py-2 text-muted focus:outline-none hover:text-white transition-colors"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${submenuOpen ? "rotate-180" : ""}`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div className="bg-slate-800 p-2 w-full rounded-lg mt-1">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={handleSubmenuLinkClick}
              className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;