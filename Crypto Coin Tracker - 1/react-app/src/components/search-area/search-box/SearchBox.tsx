import "./SearchBox.css";

interface Props {
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

function SearchBox({ type, id, name, placeholder }: Props) {
  return (
    <div>
      <input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  );
}

export default SearchBox;
