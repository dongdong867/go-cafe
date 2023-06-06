import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const FINISH_ORDER = gql`
  mutation FinishOrder($finishOrderInput: FinishOrderInput!) {
    finishOrder(finishOrderInput: $finishOrderInput)
  }
`;

const useFinishOrder = (orderId: string) => {
  const [finishOrder] = useMutation(FINISH_ORDER);

  const router = useRouter();

  const handleFinishOrder = async () => {
    const finish = finishOrder({
      variables: {
        finishOrderInput: {
          id: orderId,
        },
      },
    });

    await toast
      .promise(
        finish,
        {
          loading: "Processing...",
          success: "Order Finished",
          error: (error) => error.message,
        },
        {
          className: "font-bold text-lg",
        }
      )
      .then(() => router.refresh());
  };

  return { handleFinishOrder };
};

export default useFinishOrder;
