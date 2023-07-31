package phonesale.api;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import phonesale.api.output.productOutout;
import phonesale.entity.customerEntity;
import phonesale.entity.productEntity;
import phonesale.entity.cartEntity;
import phonesale.repository.cartRepository;
import phonesale.repository.customerRepository;
import phonesale.repository.productRepository;
import phonesale.service.productService;

@RestController
@CrossOrigin
public class productAPI {
	@Autowired
	private productRepository productRe;

	@Autowired
	private customerRepository customerRe;

	@Autowired
	private productService productSe;

	@Autowired
	private cartRepository cartRe;

	@GetMapping("/prouct/{type}")
	public ResponseEntity<?> gProductDt(@PathVariable("type") String type) {
		List<productEntity> products = productRe.findByType(type);
		return ResponseEntity.ok(products);
	}

	@GetMapping("/productid/{id}")
	public ResponseEntity<?> gProductid(@PathVariable("id") Long id) {
		productEntity product = productRe.findById(id).get();
		return ResponseEntity.ok(product);
	}

	@GetMapping("/product/pages")
	public productOutout show(@RequestParam(value = "page", required = false) Integer page,
			@RequestParam(value = "limit", required = false) Integer limit) {
		productOutout result = new productOutout();

		if (page != null && limit != null) {
			result.setPage(page);
			Pageable pageable = PageRequest.of(page - 1, limit);
			result.setProducts(productRe.findAll(pageable).getContent());
			result.setTotalPage((int) Math.ceil((double) (productRe.count()) / limit));
		} else {
			result.setProducts(productRe.findAll());
		}

		return result;
	}

	@PostMapping("/customer/{username}/{productId}")
	public ResponseEntity<?> addcart(@PathVariable("username") String username,
			@PathVariable("productId") Long productId) {
		customerEntity customer = customerRe.findByName(username);
		productEntity product = productRe.findById(productId).get();
		cartEntity cart = cartRe.findByProduct_Id(product.getId());
		if(cart!=null) {			
		    cart.setQuantity(cart.getQuantity()+1);	
		    cartRe.save(cart);
		}
		else if(cart==null){	
			cartEntity cart2= new cartEntity();
			cart2.setCustomer(customer);
			cart2.setProduct(product);
			cart2.setQuantity(1);
			cartRe.save(cart2);	
		}	
		return ResponseEntity.ok(customer);
	}
    @GetMapping("/product/search")
    public ResponseEntity<?> searchProduct(@RequestParam(value="key",required = false)String key){
    	if(key==null) {
    		return ResponseEntity.ok(null);
    	}
    	List<productEntity> products = productSe.searchProducts(key);
    	return ResponseEntity.ok(products);
    }
	

}
