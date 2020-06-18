using MVCCRUDWithEF.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCCRUDWithEF.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            using (DemoDBString db = new DemoDBString())
            {
                List<Employee> empList = db.Employees.ToList();
                return View(empList);
            }
        }

        public ActionResult AddOrEdit(int id = 0)
        {
            if (id == 0)
            {
                ViewBag.Message = "Add";
                return View(new Employee());
            }
            else
            {
                using(DemoDBString db = new DemoDBString())
                {
                    Employee emp = db.Employees.Where(x => x.Emp_Id == id).FirstOrDefault<Employee>();
                    ViewBag.Message = "Edit";
                    return View(emp);
                }
            }
            
        }

        [HttpPost]
        public ActionResult AddOrEdit(Employee emp)
        {
            using(DemoDBString db = new DemoDBString())
            {
                if (emp.Emp_Id == 0)
                {
                    db.Employees.Add(emp);
                    db.SaveChanges();
                }
                else
                {
                    db.Entry(emp).State = EntityState.Modified;
                    db.SaveChanges();
                }
                
            }
            return RedirectToAction("index");
        }

        public ActionResult Delete(int id)
        {
            using (DemoDBString db = new DemoDBString())
            {
                Employee emp = db.Employees.Where(x => x.Emp_Id == id).FirstOrDefault<Employee>();
                db.Employees.Remove(emp);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }
    }
}