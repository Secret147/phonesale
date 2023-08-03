package phonesale.api;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import phonesale.dto.customerDTO;
import phonesale.entity.customerEntity;
import phonesale.repository.customerRepository;
import phonesale.service.customerService;

@RestController
@CrossOrigin
public class customerAPI {
	@Autowired
	private customerRepository customerRe;
	
	@Autowired
	private customerService customerSe;

	@PostMapping("/customer/new")
	public ResponseEntity<?> addUser(@RequestBody customerDTO customer){
		if(customerSe.findByName(customer) != null) {
			return ResponseEntity.badRequest().body("tai khoan da ton tai");
		}
		customerSe.save(customer);
		return ResponseEntity.ok(customer);
	}
	@PostMapping("/customer")
	public ResponseEntity<?> login(@RequestBody customerDTO model,HttpSession session){
		
		customerDTO customer = customerSe.findByName(model);
		if(customer.getName().equals(model.getName())  && customer.getPassword().equals(model.getPassword())) {
			session.setAttribute("id_user" , customer.getId());
			return ResponseEntity.ok(customer.getRole());   
		}
		else if(!customer.getPassword().equals(model.getPassword())){
			return ResponseEntity.badRequest().body(new ApiResponse(false,"loi nay",null));
		}
		else{
			return ResponseEntity.badRequest().body(new ApiResponse(false,"loi",null));
		}
	}
	@PutMapping("/customer/new")
	public ResponseEntity<?> editCustomer(@RequestBody customerDTO customer){
		customerSe.save(customer);
		return ResponseEntity.ok(null);
	}
	@PostMapping("/customer/logout")
	public ResponseEntity<?> logout(HttpSession session){
		session.removeAttribute("id_user");
		return ResponseEntity.ok(null);
		
	}
	@GetMapping("/customer/new")
	public List<customerDTO> getUser(){
		List<customerDTO> customers = customerSe.findAll();
		return customers;
	}
	@GetMapping("/user/{id}")
	public ResponseEntity<?> getUser (@PathVariable("id") Long id){
		customerDTO  customer = customerSe.findById(id);
		return ResponseEntity.ok(customer);
	}
	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteUser (@PathVariable("id") Long id){
		customerDTO  customer = customerSe.findById(id);
		customerSe.delete(customer);
		return ResponseEntity.ok(null);
	}

}
