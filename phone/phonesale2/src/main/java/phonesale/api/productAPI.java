package phonesale.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import phonesale.api.output.productOutout;
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
	@GetMapping("/product/{type}")
	public ResponseEntity<?> gProductDt(@PathVariable("type")String type){
		List<productEntity> products = productRe.findByType(type);
		return ResponseEntity.ok(products);
	}
	@GetMapping("/product/search")
	public ResponseEntity<?> searchByName(@RequestParam("name")String name){
		List<productEntity> products = productRe.findByName(name);
		return ResponseEntity.ok(products);
	}
	@GetMapping("/productid/{id}")
	public ResponseEntity<?> gProductid(@PathVariable("id")Long id){
		productEntity product = productRe.findById(id).get();
		return ResponseEntity.ok(product);
	}
	@GetMapping("/product/pages")
	public productOutout show(@RequestParam(value = "page" ,required = false) Integer page,
			                  @RequestParam(value = "limit", required = false) Integer limit){
		productOutout result = new productOutout();
	
			if(page !=null && limit!=null) {	
				result.setPage(page);
				Pageable pageable = PageRequest.of(page-1,limit);
				result.setProducts(productRe.findAll(pageable).getContent());
				result.setTotalPage((int) Math.ceil((double) (productRe.count())/limit));
			}
			else {
				result.setProducts(productRe.findAll());
			}
			
		return result;	             
    }
}
