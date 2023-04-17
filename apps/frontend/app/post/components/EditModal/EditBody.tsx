const EditBody = () => {
  return (
    <>
      <div className="w-full h-full border-2 rounded-xl">
        <div
          role="textbox"
          contentEditable
          className="textarea h-max min-h-[300px] rounded-xl focus:outline-none"
        ></div>
      </div>
    </>
  );
};

export default EditBody;
