package phonesale.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import phonesale.entity.customerEntity;
import phonesale.repository.customerRepository;

@RestController
@CrossOrigin
public class customerAPI {
	@Autowired
	private customerRepository customerRe;

	@PostMapping("/customer/new")
	public ResponseEntity<?> addUser(@RequestBody customerEntity customer){
		if(customerRe.findByName(customer.getName()) != null) {
			return ResponseEntity.badRequest().body("tai khoan da ton tai");
		}
		customerRe.save(customer);
		return ResponseEntity.ok(customer);
		
	}
	@GetMapping("/customer/new")
	public List<customerEntity> getUser(){
		List<customerEntity> customers = customerRe.findAll();
		return customers;
	}

}
