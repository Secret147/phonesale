package phonesale.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import phonesale.converter.productConverter;
import phonesale.dto.productDTO;
import phonesale.entity.customerEntity;
import phonesale.entity.productEntity;
import phonesale.repository.customerRepository;
import phonesale.repository.productRepository;

@Service
public class productService {
	@Autowired
	private productRepository productRe;
	private productConverter productCo;
	
	@Autowired
	private customerRepository customerRe;

	public List<productDTO> findAllPage(Pageable pageble){
		List<productDTO> results = new ArrayList<>();
		List<productEntity> entities = productRe.findAll(pageble).getContent();
		for ( productEntity item : entities) {
			productDTO product = productCo.toproductDTO(item);
			results.add(product);
		}
		return results;
	}
	
//	public void removeProductFromCustomer(Long customerId, Long productId) {
//        customerEntity customer = customerRe.findById(customerId).orElse(null);
//        productEntity product = productRe.findById(productId).orElse(null);
//
//        if (customer != null && product != null) {
//            // Kiểm tra xem khách hàng có chứa sản phẩm muốn xóa không
//            if (customer.getProducts().contains(product)) {
//                // Xóa liên kết trong bảng trung gian
//                customer.getProducts().remove(product);
//                // Cập nhật khách hàng sau khi xóa sản phẩm
//                customerRe.save(customer);
//            }
//        }
//    }

}
