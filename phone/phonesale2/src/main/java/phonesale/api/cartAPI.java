package phonesale.api;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import phonesale.entity.cartEntity;
import phonesale.entity.customerEntity;
import phonesale.entity.productEntity;
import phonesale.repository.cartRepository;
import phonesale.repository.customerRepository;
import phonesale.repository.productRepository;
import phonesale.service.productService;

@RestController
@CrossOrigin
public class cartAPI {
	@Autowired
	private productRepository productRe;

	@Autowired
	private customerRepository customerRe;

	@Autowired
	private productService productSe;

	@Autowired
	private cartRepository cartRe;

	@GetMapping("/product2/{username}")
	public ResponseEntity<?> getProduct(@PathVariable("username") String username) {
		customerEntity customer = customerRe.findByName(username);
		Long customerId = customer.getId();
		List<cartEntity> cartItems = cartRe.findAllByCustomer_Id(customerId);
		cartItems.sort(Comparator.comparing(cartEntity::getId).reversed());
		List<productEntity> products = new ArrayList<>();
		for (cartEntity cartItem : cartItems) {
			products.add(cartItem.getProduct());
		}
		
		return ResponseEntity.ok(products);
	}
	@GetMapping("/size/{username}")
	public ResponseEntity<?> countProduct(@PathVariable("username") String username) {
		customerEntity customer = customerRe.findByName(username);
		List<cartEntity> cartItems = cartRe.findAllByCustomer_Id(customer.getId());
		return ResponseEntity.ok(cartItems.size());
	}
	@GetMapping("/cart/quantity/{productId}")
	public ResponseEntity<?> countQuantity(@PathVariable("productId") Long productId){
		cartEntity cart = cartRe.findByProduct_Id(productId);
		return ResponseEntity.ok(cart.getQuantity());
	}
	@GetMapping("/cart/totalprice/{username}")
	public ResponseEntity<?> totalPrice(@PathVariable("username") String username){
		customerEntity customer = customerRe.findByName(username);
		List<cartEntity> carts = cartRe.findAllByCustomer_Id(customer.getId());
		long sum =0;
		for(cartEntity item:carts) {
			productEntity product = item.getProduct();
			sum += item.getQuantity()*product.getPrice();
		}
		return ResponseEntity.ok(sum);
	}
	@PostMapping("/cart/up/{productId}")
	public ResponseEntity<?> upQuantity(@PathVariable("productId") Long productId){
		cartEntity cart = cartRe.findByProduct_Id(productId);
		cart.setQuantity(cart.getQuantity()+1);
        cartRe.save(cart);
		return ResponseEntity.ok(cart);
	}
	@PostMapping("/cart/down/{productId}")
	public ResponseEntity<?> downQuantity(@PathVariable("productId") Long productId){
		cartEntity cart = cartRe.findByProduct_Id(productId);
		if(cart.getQuantity() >1) {
			cart.setQuantity(cart.getQuantity()-1);
	        cartRe.save(cart);
		}
		else {
			cartRe.delete(cart);
		}
		
		return ResponseEntity.ok(cart);
	}
	@DeleteMapping("/cart/product/{productId}")
    public ResponseEntity<String> removeProduct(@PathVariable Long productId) {
        cartEntity cart = cartRe.findByProduct_Id(productId);
        cartRe.delete(cart);
        return ResponseEntity.ok("Product removed from customer successfully.");
    }

}
