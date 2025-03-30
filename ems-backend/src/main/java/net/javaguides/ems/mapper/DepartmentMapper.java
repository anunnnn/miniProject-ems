package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.entity.Department;

public class DepartmentMapper {

    // convert department jpa to department dto
    public static DepartmentDto mapToDepartmentDto ( Department department ){
        return new DepartmentDto (
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    // convert department dto to department jpa
    public static Department mapToDepartment ( DepartmentDto departmentDto ){
        return new Department (
                departmentDto.getId(),
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
        );
    }
}
