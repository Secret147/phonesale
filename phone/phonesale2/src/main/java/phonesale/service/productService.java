package phonesale.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import phonesale.converter.productConverter;
import phonesale.dto.productDTO;
import phonesale.entity.productEntity;
import phonesale.repository.productRepository;

@Service
public class productService {
	@Autowired
	private productRepository productRe;
	private productConverter productCo;

	public List<productDTO> findAllPage(Pageable pageble){
		List<productDTO> results = new ArrayList<>();
		List<productEntity> entities = productRe.findAll(pageble).getContent();
		for ( productEntity item : entities) {
			productDTO product = productCo.toproductDTO(item);
			results.add(product);
		}
		return results;
	}

}
