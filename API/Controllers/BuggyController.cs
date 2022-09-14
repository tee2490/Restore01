using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("[action]")]
        public IActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("[action]")]
        public IActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails { Title = "This is BadRequest" });
        }

        [HttpGet("[action]")]
        public IActionResult GetUnAuthorized()
        {
            return Unauthorized();
        }

        [HttpGet("[action]")]
        public IActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is the first error");
            ModelState.AddModelError("Problem2", "This is the second error");
            return ValidationProblem();
        }

        [HttpGet("[action]")]
        public IActionResult GetServerError()
        {
            throw new Exception("This is server error");
        }



    }
}