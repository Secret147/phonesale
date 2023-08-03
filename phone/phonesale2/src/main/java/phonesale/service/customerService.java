package phonesale.service;

import java.util.List;

import phonesale.dto.customerDTO;

public interface customerService {
    customerDTO findByName(customerDTO customer);
    void save(customerDTO customer);
    List<customerDTO> findAll();
    customerDTO findById(Long id);
    void delete(customerDTO customer);
}
