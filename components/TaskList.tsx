"use client";

import React, { useState, useEffect } from 'react';
   import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
   import { Button } from "@/components/ui/button";

   type Task = {
     id: number;
     title: string;
     description: string;
     status: string;
   };

   const TaskList = () => {
     const [tasks, setTasks] = useState<Task[]>([]);

     useEffect(() => {
       // Fetch tasks from API
       const fetchTasks = async () => {
         const response = await fetch('/api/tasks');
         const data = await response.json();
         setTasks(data);
       };
       fetchTasks();
     }, []);

     return (
       <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Task List</h1>
         <Table>
           <TableHeader>
             <TableRow>
               <TableHead>Title</TableHead>
               <TableHead>Description</TableHead>
               <TableHead>Status</TableHead>
               <TableHead>Actions</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             {tasks.map((task) => (
               <TableRow key={task.id}>
                 <TableCell>{task.title}</TableCell>
                 <TableCell>{task.description}</TableCell>
                 <TableCell>{task.status}</TableCell>
                 <TableCell>
                   <Button variant="outline" size="sm">Edit</Button>
                   <Button variant="destructive" size="sm" className="ml-2">Delete</Button>
                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </div>
     );
   };

   export default TaskList;