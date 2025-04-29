import { Accordion, AccordionItem } from "../../components/Accordion";

export default function Accordian() {
  return (
    <>
      <Accordion>
        <AccordionItem value={0} trigger="Section 1">
          <p>Content for section 1...</p>
        </AccordionItem>
        <AccordionItem value={1} trigger="Section 2">
          <p>Content for section 2...</p>
        </AccordionItem>
        <AccordionItem value={2} trigger="Section 3">
          <p>Content for section 3...</p>
        </AccordionItem>
      </Accordion>
    </>
  );
}
