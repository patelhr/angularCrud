using AngularCrudEmployee.Data;
using AngularCrudEmployee.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCrudEmployee.Controllers
{
  public class EmployeeController : Controller
  {
    private readonly ApplicationDbContext _context;
    public EmployeeController(ApplicationDbContext context)
    {
      _context = context;
    }
    // GET: Employee
    public ActionResult Index()
    {
      return View();
    }

    // GET: Employee
    [HttpGet]
    [Route("all")]
    public ActionResult GetAll()
    {
      return Ok(_context.EmpModel.AsQueryable());
    }

    [HttpGet]
    [Route("getEmp/{id}")]
    public async Task<ActionResult> GetEmpAsync(int id)
    {
      var obj = await _context.EmpModel.FindAsync(id);
      return Ok(obj);
    }

    // GET: Employee/Details/5
    public ActionResult Details(int id)
    {
      return View();
    }

    // GET: Employee/Create
    public ActionResult Create()
    {
      return View();
    }

    // POST: Employee/Create
    [HttpPost("/post")]
    public async Task<ActionResult> CreateAsync([FromBody] EmpModel empData)
    {
      try
      {
        empData.Id = 0;
        _context.EmpModel.Add(empData);
        await _context.SaveChangesAsync();
        return Ok(true);
      }
      catch(Exception ex)
      {
        return BadRequest();
      }
    }

    // GET: Employee/Edit/5
    public ActionResult Edit(int id)
    {
      return View();
    }

    // POST: Employee/Edit/5
    [HttpPut("edit/{id}")]
    public async Task<ActionResult> EditAsync([FromBody] EmpModel empData)
    {
      try
      {
        _context.EmpModel.Update(empData);
        await _context.SaveChangesAsync();
        return Ok(true);
      }
      catch (Exception ex)
      {
        return BadRequest();
      }
    }

    //// GET: Employee/Delete/5
    //[HttpDelete("delete/{id}")]
    //public ActionResult Delete(int id,[FromBody] EmpModel empData)
    //{
      
    //}

    // POST: Employee/Delete/5
    [HttpDelete("delete/{id}")]
    public async Task<ActionResult> Delete(int id)
    {
      try
      {
        var empData =  await _context.EmpModel.FindAsync(id);
        _context.EmpModel.Remove(empData);
        _context.SaveChanges();
        return Ok(true);
      }
      catch
      {
        return BadRequest();
      }
    }
  }
}