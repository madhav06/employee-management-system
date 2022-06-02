 import React , {useState} from 'react'
 import Swal from 'sweetalert2';
 import Header from './Header';
 import List from './List';
 import Add from './Add';
 import Edit from './Edit';
 
 import { employeesData } from '../../data';
 
 const Dashboard = () => {
   const [employees, setEmployees] = useState(employeesData);
   const [isAdding, setIsAdding] = useState(false);
   const [isEditing, setIsEditing] = useState(false);
   const [selectedEmployee, setSelectedEmployee] = useState(null);

   const handleDelete = (id) => {
     Swal.fire({
       icon: 'warning',
       title: 'Are you sure?',
       text: "You won't be able to revert this",
       showCancelButton: true,
       confirmButtonText: 'Yes! Delete it!!',
       cancelButtonText: 'No, cancel'
     }).then(result => {

      if (result.value){
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted',
          text: `${employee.firstName} ${employee.lastName}'s data had been deleted!`,
          showConfirmButton: false,
          timer: 1500
        });

        setEmployees(employees.filter(employee => employee.id !== id))
      }
     });
   }

   const handleEdit = (id) => {
     const [employee] = employees.filter(employee.id === id);

     setSelectedEmployee(employee);
     setIsEditing(true);
   }

   return (
     <div className='container'>
       {!isAdding && !isEditing && (
         <>
           <Header setIsAdding={setIsAdding } />
           <List 
           employees={employees} 
           handleEdit={handleEdit} 
           handleDelete={handleDelete} />
         </>
       )}
       {/* Add */}
       {isAdding && (
         <Add
           employees={employees}
           setEmployees={setEmployees}
           setIsAdding={setIsAdding}
         />
       )}
       {/* Edit */}
       {isEditing && (
         <Edit 
           employees={employees}
           selectedEmployee={selectedEmployee}
           setEmployees={setEmployees}
           setIsEditing={setIsEditing}
         />
       )}
     </div>
   )
 }
 
 export default Dashboard
 