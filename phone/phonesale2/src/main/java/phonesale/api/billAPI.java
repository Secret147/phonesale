package phonesale.api;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.support.Repositories;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import phonesale.entity.billEntity;
import phonesale.entity.billdetailEntity;
import phonesale.entity.cartEntity;
import phonesale.entity.customerEntity;
import phonesale.entity.productEntity;
import phonesale.repository.billRepository;
import phonesale.repository.billdetailRepository;
import phonesale.repository.cartRepository;
import phonesale.repository.customerRepository;

@RestController
@CrossOrigin
public class billAPI {
	@Autowired
	private billRepository billRe;
	
	@Autowired
	private customerRepository customerRe;
	
	@Autowired
	private billdetailRepository billdetailRe;
	
	@Autowired
	private cartRepository cartRe;

	@PostMapping("/bill/{username}")
	public ResponseEntity<?> createBill(@RequestBody billEntity bill,@PathVariable("username") String username){
		 customerEntity customer = customerRe.findByName(username);
		 List<billdetailEntity> billdetails = new ArrayList<>();
		 List<cartEntity> carts = cartRe.findAllByCustomer_Id(customer.getId());
		 long sum=0;
		 for(cartEntity cart : carts) {
			 billdetailEntity billdetail = new billdetailEntity();
			 productEntity product = cart.getProduct();
			 sum += cart.getQuantity()*product.getPrice();
			 billdetail.setBill(bill);
			 billdetail.setProductbill(cart.getProduct());
			 billdetail.setQuantity(cart.getQuantity());
			 billdetails.add(billdetail);
			
		 }
		 bill.setCustomerbill(customer);
	     bill.setTotalprice(sum);
	     billRe.save(bill);
		 billdetailRe.saveAll(billdetails);
	     cartRe.deleteAll(carts);
	     return ResponseEntity.ok(bill);
	}
	@GetMapping("/bill/{username}")
	public ResponseEntity<?> getBill(@PathVariable("username") String username){
		customerEntity customer = customerRe.findByName(username);
		List<billEntity> bills = billRe.findByCustomerbill_Id(customer.getId());
		return ResponseEntity.ok(bills);
	}
	

}
