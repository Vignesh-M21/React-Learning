import { useRef } from "react";
import { useAccordion } from "../hook/useAccordion";
import { ChevronDown } from "react-feather";

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useAccordion();
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className="border-b bg-white" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
