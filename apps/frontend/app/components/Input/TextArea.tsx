'use client';

type Props = {
  postBody: string;
  setPostBody: React.Dispatch<React.SetStateAction<string>>;
};

const EditBody = ({ postBody, setPostBody }: Props) => {
  return (
    <>
      <div className="w-full h-full border-primary border-2 rounded-xl">
        <div
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => setPostBody(e.currentTarget.textContent as string)}
          className="textarea h-max min-h-[300px] text-lg rounded-xl focus:outline-none"
        >
          {postBody}
        </div>
      </div>
    </>
  );
};

export default EditBody;
