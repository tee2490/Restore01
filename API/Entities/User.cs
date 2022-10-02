using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class User : IdentityUser<int>
    {
        //จะสร้างตาราง UserAddress ให้เองอัตโนมัติ
        public UserAddress Address {get; set;}

    }
}