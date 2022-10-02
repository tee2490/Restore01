namespace API.Entities.OrderAggregate
{
   //สถานะการชำระเงิน
   public enum OrderStatus
    {
        Pending,
        PaymentReceived,
        PaymentFailed
    }

}