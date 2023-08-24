import React, { useState } from "react";

const AccordionItem = ({ header, content, activeIndex, index, setActiveIndex }) => {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    if (isActive) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionItemStyle = {
    width: "100%",
    borderBottom: "1px solid #ccc",
    overflow: "hidden",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  };

  const accordionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 16px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "#ffff",
    borderRadius: "8px",
  };

  const accordionIconStyle = {
    transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  const accordionDrawerStyle = {
    padding: "10px 20px",
    textAlign: "left",
    backgroundColor: "#ffff",
  };

  return (
    <div style={accordionItemStyle} className={isActive ? "active" : ""}>
      <div style={accordionHeaderStyle} onClick={toggleAccordion}>
        <span className="accordion-title">{header}</span>
        <span style={accordionIconStyle}>&#x25BC;</span>
      </div>
      {isActive && <div style={accordionDrawerStyle}>{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    marginLeft:"15%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <AccordionItem
        header="How does it work?"
        content={
          <div>
           You can place order & rider will come at your doorstep for pickup and drop.
          </div>
        }
        activeIndex={activeIndex}
        index={0}
        setActiveIndex={setActiveIndex}
      />
      <AccordionItem
        header="How many days does it take to process"
        content={<div>
          Usually delivery is done in 48-72 hours
        </div>}
        activeIndex={activeIndex}
        index={1}
        setActiveIndex={setActiveIndex}
      />
      <AccordionItem
        header="Do you have free pickup & drop?"
        content={<div>
          Yes we provide Free pick & drop.
        </div>}
        activeIndex={activeIndex}
        index={2}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default Accordion;
