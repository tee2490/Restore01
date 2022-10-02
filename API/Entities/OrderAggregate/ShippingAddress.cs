
using Microsoft.EntityFrameworkCore;

namespace API.Entities.OrderAggregate
{
   [Owned] //Primary key ใช้จากตารางอื่นที่เรียกใช้อีกที
    public class ShippingAddress : Address
    {
        
    }

}