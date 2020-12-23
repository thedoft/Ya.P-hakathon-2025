import React from 'react';

export default function SectionList(props) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(
      (props.middleware) && (props.count)
      ? props.middleware(props.items, props.count)
      : props.items
    );
  }, [props, items]);

  const Template = (item) => props.template(item);

  return (
    <ul className={`section__list ${props.class || ''}`}>
      {items.map((item, index) => (
        <Template item={item} key={index} />
      ))}
    </ul>
  )
}
