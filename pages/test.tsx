import React from "react";

type Country = typeof Items[0];

function Test() {
  const [list, setList] = React.useState<Country>(Items[0]);

  const onSelectCountry = React.useCallback((data: Country) => {
    setList(data);
  }, []);

  return (
    <div>
      {Items.map((item, index) => (
        <li key={index} onClick={() => onSelectCountry(item)}>
          <a>{item.country}</a>
        </li>
      ))}
    </div>
  );
}

export default Test;

const Items = [
  {
    country: "India",
    name: "",
    address: "",
    phone: "",
    map: "",
  },
];
