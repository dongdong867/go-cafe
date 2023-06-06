type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <>
      <div className="text-3xl font-bold pt-4">{title}</div>
      <div className="divider" />
    </>
  );
};

export default PageTitle;
