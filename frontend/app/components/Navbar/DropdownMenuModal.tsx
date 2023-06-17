type Props = {
  position?: string;
  button: React.ReactNode;
  listItems: React.ReactNode;
};

const DropdownMenuModal = ({ position, button, listItems }: Props) => {
  return (
    <>
      <div className={`dropdown ${position}`}>
        <div tabIndex={0}>{button}</div>
        <ul
          tabIndex={0}
          className="
            menu menu-md
            dropdown-content
            w-max
            bg-base-100
            rounded-box
            shadow-basic
          "
        >
          {listItems}
        </ul>
      </div>
    </>
  );
};

export default DropdownMenuModal;
