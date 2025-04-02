const Employees_Obj = [
  {
    id: 1,
    Name: "Cameron",
    Title: "Director of Service",
    skills: {
      excel: "expert",
      Sql: "beginer",
      ClientSpace: "expert",
    },
    Team: ["Krista", "Jim"],
  },
  {
    id: 2,
    Name: "Jim",
    Title: "Principal Consultant",
    skills: {
      excel: "expert",
      Sql: "expert",
      ClientSpace: "expert",
    },
    Team: ["Krista"],
  },
  {
    id: 3,
    Name: "Krista",
    Title: "Sr. Client Space Product Consultant",
    skills: {
      excel: "beginer",
      Sql: "beginer",
      ClientSpace: "expert",
    },
    Team: ["Jim"],
  },
  {
    id: 4,
    Name: "Steven",
    Title: "Product Consultant",
    skills: {
      excel: "beginer",
      Sql: "beginer",
      ClientSpace: "expert",
    },
    Team: ["Krista", "Jim", "Ron"],
  },
  {
    id: 5,
    Name: "Ron",
    Title: "Director of Service",
    skills: {
      excel: "beginer",
      Sql: "beginer",
      ClientSpace: "beginer",
    },
    Team: ["Steven", "Krista", "Jim"],
  },
];

/* #### Array Test #### */

const roles_titles_Arr = [
  "Manager",
  "Product Consultant",
  "Director of Service",
  "Principal Consultant",
];

function Employee() {
  return Employees_Obj;
}

function EmpById(id) {
  return Employees_Obj.find((d) => d.id === id);
}

/* Testing to print the object By Id*/
const emp_batch_one = EmpById(1);
emp_batch_one;

const Obj_One = EmpById(1);

const { id, Name, Title } = Obj_One;
Name;
id;
Title;
