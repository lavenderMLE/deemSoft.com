package tech.getarrays.employmanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.employmanager.model.Employee;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {

    void deleteEmployeeByID(Long id);

    Optional<Employee> findEmployeeById(Long id);
}
