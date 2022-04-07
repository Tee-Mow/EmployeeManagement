using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagementAPI.Models
{
    public class Person
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PersonId { get; set; }
        [Required]
        [StringLength(128)] 
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required]
        [StringLength(128)] 
        [Display(Name = "Last Name")]
        public string LasttName { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Birth Date")]        
        public DateTime BirthDate { get; set; }
    }
}