import InputModal from "@/app/components/Input/InputModal";
import PageTitle from "@/app/components/PageTitle";
import { MdOutlineImportContacts } from "react-icons/md";

type Props = {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
};

const CreateCategoryModal = ({
  categoryName,
  setCategoryName,
  onSubmit,
}: Props) => {
  return (
    <>
      <div className="w-full flex justify-end">
        <label htmlFor="createCategory">
          <div className="btn btn-primary btn-wide text-white text-xl">
            create category
          </div>
        </label>
      </div>
      <label htmlFor="createCategory" className="w-max">
        <input type="checkbox" id="createCategory" className="modal-toggle" />
        <div className="modal modal-middle max-[450px]:modal-bottom">
          <div className="modal-box">
            <PageTitle title="Create Category" />
            <InputModal
              topLabelText="CATEGORY NAME"
              sideLabel={<MdOutlineImportContacts className="ml-2" />}
              value={categoryName}
              setValue={setCategoryName}
            />
            <div className="modal-action">
              <label
                htmlFor="createCategory"
                onClick={onSubmit}
                className="btn btn-primary text-white"
              >
                create
              </label>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default CreateCategoryModal;
