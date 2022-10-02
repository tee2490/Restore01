using API.Entities.OrderAggregate;

namespace API.DTOs
{
    public class CreateOrderDto //เก็บเฉพาะที่อยู่จัดส่่ง
    {
        public bool SaveAddress { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
    }

}