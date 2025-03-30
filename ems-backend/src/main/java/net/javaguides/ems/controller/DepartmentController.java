package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// @CrossOrigin("*")
@RestController
@RequestMapping("/api/departments")
@AllArgsConstructor

public class DepartmentController {
    private DepartmentService departmentService;

    // Add Department REST API
    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment (@RequestBody DepartmentDto departmentDto){
        DepartmentDto savedDepartment = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

     // Build Get Department by REST apI
    @GetMapping("{id}")
    public ResponseEntity < DepartmentDto > getDepartmentById(@PathVariable("id") Long departmentId){
        DepartmentDto departmentDto = departmentService.getDepartmentById ( departmentId );

        return ResponseEntity.ok(departmentDto);
    }

    // Build Get All Departments by REST API
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments(){
        List< DepartmentDto > departments = departmentService.getAllDepartments();

        return ResponseEntity.ok(departments);
    }

    // Build Update Department by REST API
    @PutMapping("{id}")
    public ResponseEntity<DepartmentDto> updateDepartment(@PathVariable("id") Long departmentId,
                                                          @RequestBody DepartmentDto updatedDepartment){
        DepartmentDto departmentDto = departmentService.updateDepartment(departmentId, updatedDepartment);

        return ResponseEntity.ok(departmentDto);
    }

    // build Delete Department REST API
    @DeleteMapping("{id}")
    public ResponseEntity< String > deleteDepartment(@PathVariable("id") Long departmentId){
        departmentService.deleteDepartment(departmentId);
        return ResponseEntity.ok("Deportment Deleted Successfully");
    }
}
