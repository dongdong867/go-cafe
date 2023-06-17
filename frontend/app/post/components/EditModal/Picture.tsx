"use client";

import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { HiPencilAlt } from "react-icons/hi";

type Props = {
  originPicture?: string[];
  pictureList: File[];
  deletedPicture?: string[];
  setPictureList: React.Dispatch<React.SetStateAction<File[]>>;
  setDeletedPicture?: React.Dispatch<React.SetStateAction<string[]>>;
};

const EditPicture = ({
  originPicture = [],
  pictureList,
  deletedPicture = [],
  setPictureList,
  setDeletedPicture = () => {},
}: Props) => {
  return (
    <>
      <div
        className="
          w-full h-[384px] 
          max-[450px]:h-[270px] 
          rounded-xl 
          bg-base-100
          flex 
          justify-center 
          place-items-center
          border-2 border-primary
          overflow-clip
          "
      >
        <div className="carousel w-full">
          {originPicture.length > 0 &&
            originPicture.map((picture) => {
              if (deletedPicture.indexOf(picture) === -1) {
                return (
                  <div key={picture} className="carousel-item w-full">
                    <label htmlFor="originPicture">
                      <Image src={picture} alt="" width={1000} height={1000} />
                    </label>
                    <input
                      type="checkbox"
                      id="originPicture"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <div className="text-2xl font-bold">Delete Picture</div>
                        <div>Sure to delete this picture?</div>
                        <div className="modal-action">
                          <button
                            className="btn btn-error text-base-100"
                            onClick={() => {
                              setDeletedPicture([...deletedPicture, picture]);
                              toast.success("Picture Deleted", {
                                className: "font-bold text-lg",
                              });
                            }}
                          >
                            Delete
                          </button>
                          <label
                            htmlFor="originPicture"
                            className="btn btn-primary text-base-100"
                          >
                            Cancel
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          {pictureList.length > 0 &&
            pictureList.map((picture) => {
              return (
                <div
                  key={picture.name}
                  className="carousel-item w-full aspect-auto"
                >
                  <label htmlFor="delete">
                    <Image
                      src={URL.createObjectURL(picture)}
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  </label>
                  <input id="delete" type="checkbox" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <div className="text-2xl font-bold">Delete Picture</div>
                      <div>Sure to delete this picture?</div>
                      <div className="modal-action">
                        <button
                          className="btn btn-error text-base-100"
                          onClick={() => {
                            setPictureList(
                              pictureList.filter((storedPicture) => {
                                if (storedPicture.name !== picture.name)
                                  return storedPicture;
                              })
                            );
                            toast.success("Picture Deleted", {
                              className: "font-bold text-lg",
                            });
                          }}
                        >
                          Delete
                        </button>
                        <label
                          htmlFor="delete"
                          className="btn btn-primary text-base-100"
                        >
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="carousel-item w-full justify-center place-items-center">
            <label htmlFor="input">
              <div className="w-full btn btn-primary text-white text-lg font-semibold flex place-items-center gap-x-2 max-[450px]:btn-md max-[450px]:text-base">
                <HiPencilAlt />
                <span>Add picture</span>
              </div>
            </label>
            <input
              id="input"
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                if (
                  pictureList
                    .map((picture) => picture.name)
                    .indexOf(e.target.files![0].name) > -1
                ) {
                  toast.error("Picture Exists", {
                    className: "font-bold text-lg",
                  });
                } else {
                  if (e.target.files![0].size > 1000000) {
                    toast.error("Picture Size Limit 1Mb", {
                      className: "font-bold text-lg",
                    });
                  } else {
                    setPictureList([...pictureList, e.target.files![0]]);
                    toast.success("Picture Added", {
                      className: "font-bold text-lg",
                    });
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default EditPicture;
