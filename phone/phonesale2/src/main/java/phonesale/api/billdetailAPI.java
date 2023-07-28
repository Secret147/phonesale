package phonesale.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import phonesale.entity.billEntity;
import phonesale.entity.billdetailEntity;
import phonesale.entity.productEntity;
import phonesale.repository.billRepository;
import phonesale.repository.billdetailRepository;
import phonesale.repository.productRepository;

@RestController
@CrossOrigin
public class billdetailAPI {
	@Autowired
	private billdetailRepository billdetailRe;
	
	@Autowired
	private billRepository billRe;
	
	@Autowired
	private productRepository productRe;

	@GetMapping("/billdetail/{billid}")
	public ResponseEntity<?> getproduct (@PathVariable("billid")Long id){
		List<productEntity> products = new ArrayList<>();
		List<billEntity> bills = billRe.findByCustomerbill_Id(id);
		List<billdetailEntity> billdetails = billdetailRe.findAllByBill_Id(id);
		for(billdetailEntity billdetail : billdetails) {
			products.add(billdetail.getProductbill());
		}
		return ResponseEntity.ok(products);
	}
	@GetMapping("/billdetail/quantity/{productid}/{billid}")
	public ResponseEntity<?> getQantity(@PathVariable("productid") Long productid,@PathVariable("billid") Long billid){
		List<billdetailEntity> billdetails = billdetailRe.findAllByBill_Id(billid);
		int quantity = 0;
		for(billdetailEntity billdetail : billdetails) {
			if(billdetail.getProductbill().getId().equals(productid)) {
				quantity = billdetail.getQuantity();
			}
		}
		return ResponseEntity.ok(quantity);
		
	}

}
