export const useBase64 = async (picture: File) => {
  return new Promise<string>((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(picture);

    fileReader.onload = () => resolve(fileReader.result as string);
  });
};
