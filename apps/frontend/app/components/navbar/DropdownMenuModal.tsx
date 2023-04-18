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
            menu menu-compact
          dropdown-content
          w-max
          bg-base-100
          rounded-box
          shadow-[0_0_15px_rgba(0,0,0,0.4)] 
          "
        >
          {listItems}
        </ul>
      </div>
    </>
  );
};

export default DropdownMenuModal;
