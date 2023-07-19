package phonesale.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import phonesale.entity.productEntity;
import phonesale.repository.productRepository;

@RestController
@CrossOrigin
public class productAPI {
	@Autowired
	private productRepository productRe;
	
	@GetMapping("/product/new")
	public ResponseEntity<?> gProduct(){
		List<productEntity> products = productRe.findAll();
		return ResponseEntity.ok(products);
	}
	@GetMapping("/product")
	public ResponseEntity<?> gProductMt(){
		List<productEntity> products = productRe.findByType("DT");
		return ResponseEntity.ok(products);
	}
	@GetMapping("/product/{type}")
	public ResponseEntity<?> gProductDt(@PathVariable("type")String type){
		List<productEntity> products = productRe.findByType(type);
		return ResponseEntity.ok(products);
	}
	@GetMapping("/product/search/{name}")
	public ResponseEntity<?> searchByName(@PathVariable("name")String name){
		List<productEntity> products = productRe.findByName(name);
		return ResponseEntity.ok(products);
	}
	@GetMapping("/productid/{id}")
	public ResponseEntity<?> gProductid(@PathVariable("id")Long id){
		productEntity product = productRe.findById(id).get();
		return ResponseEntity.ok(product);
	}
	




}
