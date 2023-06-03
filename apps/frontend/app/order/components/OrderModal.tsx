'use client';

import useFinishOrder from '@/hooks/useOrder';
import { Toaster } from 'react-hot-toast';

type Props = {
  order: Order;
};

const OrderModal = ({ order }: Props) => {
  const borderColor = order.finished ? '' : 'border-4 border-primary';

  const { handleFinishOrder } = useFinishOrder(order.id);

  return (
    <div className={`collapse ${borderColor} rounded-box shadow-basic`}>
      <input type="checkbox" />
      <div className="collapse-title space-y-4">
        <div className="text-2xl font-bold">{order.tableNumber}</div>

        <div className="flex flex-col -space-y-1">
          <div className="flex place-items-baseline space-x-1">
            <div className="font-medium text-sm">Order No.</div>
            <div className="font-semibold text-base">
              {order.id.substring(0, 5)}
            </div>
          </div>

          <div className="flex place-items-baseline space-x-1">
            <div className="font-medium text-sm">Customer No.</div>
            <div className="font-semibold text-base">
              {order.customerId.substring(0, 5)}
            </div>
          </div>
        </div>
      </div>

      <div className="collapse-content w-11/12 m-auto">
        <div className="divider my-2" />
        <div>
          {order.dishes.map((dish) => (
            <div className="flex font-bold text-lg">
              <div className="w-1/2">{dish.name}</div>
              <div className="w-1/4 text-right">X{dish.count}</div>
              <div className="w-1/4 text-right">${dish.price}</div>
            </div>
          ))}
        </div>
        <div className="divider my-2" />
        <div className="text-2xl text-right font-bold">${order.totalPrice}</div>
        {!order.finished && (
          <button
            onClick={(e) => {
              handleFinishOrder(e);
            }}
            className="btn btn-primary btn-block text-white text-lg mt-4"
          >
            finished
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default OrderModal;
