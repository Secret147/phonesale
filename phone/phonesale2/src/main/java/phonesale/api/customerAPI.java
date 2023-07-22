package phonesale.api;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	@PostMapping("/customer")
	public ResponseEntity<?> login(@RequestBody customerEntity model,HttpSession session){
		customerEntity customer = new customerEntity();
		customer = customerRe.findByName(model.getName());
		if(customer.getName().equals(model.getName())  && customer.getPassword().equals(model.getPassword())) {
			session.setAttribute("id_user" , customer.getId());
			return ResponseEntity.ok(model);   
		}
		else if(!customer.getPassword().equals(model.getPassword())){
			return ResponseEntity.badRequest().body("Sai thông tin mật khẩu");
		}
		else{
			return ResponseEntity.badRequest().body("Tài khoản không tồn tại");
		}
		
	}
	@PostMapping("/customer/logout")
	public ResponseEntity<?> logout(HttpSession session){
		session.removeAttribute("id_user");
		return ResponseEntity.ok(null);
		
	}
	@GetMapping("/customer/new")
	public List<customerEntity> getUser(){
		List<customerEntity> customers = customerRe.findAll();
		return customers;
	}

}
