export function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is DirectorInterface {
  return 'workDirectorTasks' in employee;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}
